import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const sesClient = new SESClient({ region: process.env.AWS_REGION || 'us-east-1' });

export const handler = async (event) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': process.env.ALLOWED_ORIGIN || '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'CORS preflight successful' })
    };
  }

  try {
    // Parse the request body
    const body = JSON.parse(event.body);
    
    // Validate required fields
    const requiredFields = ['type', 'parentName', 'studentName', 'grade', 'subjects', 'phone', 'email', 'message'];
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          ok: false,
          error: `Missing required fields: ${missingFields.join(', ')}`
        })
      };
    }

    // Check honeypot field
    if (body.nickname) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ ok: true })
      };
    }

    // Validate phone number (Indian format)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(body.phone.replace(/\D/g, ''))) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          ok: false,
          error: 'Please enter a valid Indian phone number'
        })
      };
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          ok: false,
          error: 'Please enter a valid email address'
        })
      };
    }

    // Prepare email content based on type
    const emailSubject = getEmailSubject(body.type);
    const emailBody = generateEmailBody(body);

    // Send email using SES
    const command = new SendEmailCommand({
      Source: process.env.FROM_EMAIL,
      Destination: {
        ToAddresses: [process.env.TO_EMAIL]
      },
      Message: {
        Subject: {
          Data: emailSubject,
          Charset: 'UTF-8'
        },
        Body: {
          Html: {
            Data: emailBody,
            Charset: 'UTF-8'
          }
        }
      }
    });

    await sesClient.send(command);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ ok: true })
    };

  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        ok: false,
        error: 'Internal server error. Please try again later.'
      })
    };
  }
};

function getEmailSubject(type) {
  const subjects = {
    'contact': 'New Contact Form Submission - Spark & Shine',
    'demo': 'New Demo Class Booking Request - Spark & Shine',
    'fee-quote': 'New Fee Quote Request - Spark & Shine'
  };
  return subjects[type] || 'New Inquiry - Spark & Shine';
}

function generateEmailBody(data) {
  const typeLabels = {
    'contact': 'General Contact',
    'demo': 'Demo Class Booking',
    'fee-quote': 'Fee Quote Request'
  };

  const typeLabel = typeLabels[data.type] || 'General Inquiry';
  const timestamp = new Date().toLocaleString('en-IN', { 
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #D7263D, #F4B000); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #D7263D; }
        .value { margin-top: 5px; }
        .subjects { display: flex; flex-wrap: wrap; gap: 5px; }
        .subject-tag { background: #F4B000; color: #0E1E2B; padding: 2px 8px; border-radius: 12px; font-size: 12px; }
        .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>Spark & Shine Tuition Classes</h2>
          <p>New ${typeLabel} - ${timestamp}</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Parent Name:</div>
            <div class="value">${data.parentName}</div>
          </div>
          
          <div class="field">
            <div class="label">Student Name:</div>
            <div class="value">${data.studentName}</div>
          </div>
          
          <div class="field">
            <div class="label">Grade:</div>
            <div class="value">${data.grade}</div>
          </div>
          
          <div class="field">
            <div class="label">Subjects of Interest:</div>
            <div class="value">
              <div class="subjects">
                ${data.subjects.map(subject => `<span class="subject-tag">${subject}</span>`).join('')}
              </div>
            </div>
          </div>
          
          ${data.preferredTime ? `
          <div class="field">
            <div class="label">Preferred Time:</div>
            <div class="value">${data.preferredTime}</div>
          </div>
          ` : ''}
          
          <div class="field">
            <div class="label">Phone Number:</div>
            <div class="value">${data.phone}</div>
          </div>
          
          <div class="field">
            <div class="label">Email Address:</div>
            <div class="value">${data.email}</div>
          </div>
          
          <div class="field">
            <div class="label">Message:</div>
            <div class="value">${data.message}</div>
          </div>
          
          <div class="footer">
            <p><strong>Action Required:</strong> Please respond to this inquiry within 24 hours.</p>
            <p>This email was sent from the Spark & Shine Tuition Classes website contact form.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}


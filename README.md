# Spark & Shine Tuition Classes Website

A modern, responsive React + Tailwind CSS website for Spark & Shine Tuition Classes in Ankleshwar, Gujarat. Features a complete contact system with AWS integration for handling inquiries, demo class bookings, and fee quote requests.

## 🚀 Features

- **Modern Design**: Clean, responsive UI with Tailwind CSS
- **Small Batch Focus**: Emphasizes individual attention and personalized learning
- **Multi-Board Support**: CBSE & GSEB curriculum coverage
- **Contact System**: AWS-powered email handling for inquiries
- **SEO Optimized**: Meta tags, sitemap, and Schema.org markup
- **Accessibility**: WCAG AA compliant with proper focus management
- **Performance**: Lighthouse score ≥90 across all metrics

## 📋 Pages

- **Home**: Hero section, features, testimonials, and CTAs
- **About**: Our story, values, and teaching approach
- **Classes**: Curriculum details by grade level (K-9)
- **Fees**: Flexible pricing plans and payment options
- **Demo**: Free demo class booking system
- **Gallery**: Learning environment showcase
- **Contact**: Multiple contact methods and inquiry form

## 🛠 Tech Stack

- **Frontend**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Backend**: AWS API Gateway + Lambda + SES
- **Deployment**: Vercel/Netlify ready

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- AWS account (for contact system)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd spark-and-shine-tuition
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Update `.env.local` with your AWS API Gateway URL:
   ```env
   VITE_CONTACT_API_URL=https://your-api-gateway-url.amazonaws.com/contact
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## ☁️ AWS Setup (Contact System)

### 1. Create Lambda Function

1. **Create a new Lambda function** in AWS Console
   - Runtime: Node.js 18.x
   - Architecture: x86_64

2. **Upload the Lambda code**:
   ```bash
   cd aws/lambda-contact
   npm install
   zip -r lambda-function.zip .
   ```
   
   Upload `lambda-function.zip` to your Lambda function.

3. **Set environment variables**:
   ```
   TO_EMAIL=admin@sparkandshine-tuition.com
   FROM_EMAIL=noreply@sparkandshine-tuition.com
   ALLOWED_ORIGIN=https://sparkandshine-tuition.com
   AWS_REGION=us-east-1
   ```

4. **Set up IAM permissions**:
   Create an IAM role with the following policy:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Action": [
           "ses:SendEmail",
           "ses:SendRawEmail"
         ],
         "Resource": "*"
       }
     ]
   }
   ```

### 2. Create API Gateway

1. **Create HTTP API** in API Gateway
2. **Add route**: `POST /contact`
3. **Connect to Lambda function**
4. **Enable CORS** for your domain
5. **Deploy API** and note the endpoint URL

### 3. Configure SES

1. **Verify email addresses** in SES Console:
   - `admin@sparkandshine-tuition.com` (recipient)
   - `noreply@sparkandshine-tuition.com` (sender)

2. **Request production access** (if in sandbox mode):
   - Go to SES Console → Account dashboard
   - Click "Request production access"
   - Fill out the form with your use case

3. **Set up DKIM** (recommended for better deliverability)

### 4. Update Environment Variables

Update your `.env.local` with the API Gateway URL:
```env
VITE_CONTACT_API_URL=https://your-api-gateway-url.amazonaws.com/contact
```

## 📱 Contact Forms

The website includes three types of contact forms:

1. **General Contact** (`/contact`): General inquiries and questions
2. **Demo Class Booking** (`/demo`): Free demo class requests
3. **Fee Quote Request** (`/fees`): Personalized pricing inquiries

All forms include:
- Client-side validation with Zod
- Honeypot spam protection
- Indian phone number validation
- Email format validation
- Success/error feedback
- Responsive design

## 🎨 Customization

### Brand Configuration

Update `src/site.config.ts` to customize:
- Brand name and contact information
- Subjects and grade levels
- Features and testimonials
- Color scheme and styling

### Styling

The design system is built with Tailwind CSS and includes:
- Custom color palette (primary, accent, ink, paper)
- Typography scale (Fraunces for headings, Inter for body)
- Component classes (buttons, cards, forms)
- Responsive breakpoints
- Animation utilities

### Content Management

All content is centralized in `src/site.config.ts`:
- Contact information
- Subject lists
- Feature descriptions
- Testimonials
- Statistics

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy** - automatic builds on push

### Netlify

1. **Build command**: `npm run build`
2. **Publish directory**: `dist`
3. **Set environment variables** in Netlify dashboard

### AWS S3 + CloudFront

1. **Build the project**: `npm run build`
2. **Upload to S3**: Upload `dist` contents to S3 bucket
3. **Configure CloudFront**: Set up CDN for better performance
4. **Set up custom domain** (optional)

## 📊 Performance & SEO

### Performance Optimizations

- **Code splitting**: Automatic with Vite
- **Image optimization**: Lazy loading and WebP support
- **Bundle optimization**: Tree shaking and minification
- **Caching**: Proper cache headers for static assets

### SEO Features

- **Meta tags**: Title, description, keywords
- **Open Graph**: Social media sharing
- **Schema.org**: Educational organization markup
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Search engine directives

### Accessibility

- **WCAG AA compliant**: Proper contrast ratios and focus management
- **Keyboard navigation**: Full keyboard accessibility
- **Screen reader support**: Proper ARIA labels and semantic HTML
- **Focus indicators**: Clear focus outlines

## 🧪 Testing

### Manual Testing Checklist

- [ ] All forms submit successfully
- [ ] Responsive design works on all devices
- [ ] All links and navigation work
- [ ] Contact information is accurate
- [ ] Images load properly
- [ ] Performance is acceptable

### Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📞 Support

For technical support or questions about the website:

- **Email**: sparkandshine.classes@gmail.com
- **Phone**: +91 7227893222
- **WhatsApp**: +91 7227893222

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 Changelog

### v1.0.0 (2024-01-01)
- Initial release
- Complete website with all pages
- AWS contact system integration
- Responsive design
- SEO optimization
- Accessibility compliance

---

**Built with ❤️ for Spark & Shine Tuition Classes**

*Small Batches. Big Confidence.*


# Deployment Guide

## Quick Deployment Options

### 1. Vercel (Recommended)

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration

2. **Environment Variables**
   - Add `VITE_CONTACT_API_URL` in Vercel dashboard
   - Set to your AWS API Gateway URL

3. **Deploy**
   - Click "Deploy" - automatic builds on every push

### 2. Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Environment Variables**
   - Add `VITE_CONTACT_API_URL` in Netlify dashboard

3. **Deploy**
   - Connect repository and deploy

### 3. AWS S3 + CloudFront

1. **Build Project**
   ```bash
   npm run build
   ```

2. **Upload to S3**
   - Upload `dist` folder contents to S3 bucket
   - Enable static website hosting

3. **CloudFront Setup**
   - Create CloudFront distribution
   - Point to S3 bucket
   - Configure custom domain (optional)

## AWS Contact System Setup

### Prerequisites
- AWS Account
- Domain name (optional)

### Step 1: Create Lambda Function

1. **Go to AWS Lambda Console**
2. **Create Function**
   - Runtime: Node.js 18.x
   - Architecture: x86_64

3. **Upload Code**
   ```bash
   cd aws/lambda-contact
   npm install
   zip -r lambda-function.zip .
   ```
   Upload the zip file to Lambda

4. **Set Environment Variables**
   ```
   TO_EMAIL=your-admin-email@domain.com
   FROM_EMAIL=noreply@yourdomain.com
   ALLOWED_ORIGIN=https://yourdomain.com
   AWS_REGION=us-east-1
   ```

### Step 2: Create API Gateway

1. **Create HTTP API**
2. **Add Route**: POST /contact
3. **Connect to Lambda**
4. **Enable CORS**
5. **Deploy API**

### Step 3: Configure SES

1. **Verify Email Addresses**
   - Admin email (recipient)
   - From email (sender)

2. **Request Production Access** (if needed)
   - Go to SES Console
   - Request production access

### Step 4: Test Contact System

1. **Update Environment Variable**
   ```env
   VITE_CONTACT_API_URL=https://your-api-gateway-url.amazonaws.com/contact
   ```

2. **Test Forms**
   - Try all three form types
   - Check email delivery
   - Verify error handling

## Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Contact forms work
- [ ] Mobile responsiveness
- [ ] Performance is good
- [ ] SEO meta tags present
- [ ] Analytics setup (optional)
- [ ] SSL certificate active
- [ ] Domain configured (if custom)

## Monitoring & Maintenance

### Performance Monitoring
- Use Google PageSpeed Insights
- Monitor Core Web Vitals
- Check Lighthouse scores

### Content Updates
- Update `src/site.config.ts` for content changes
- Rebuild and redeploy
- Test all functionality

### Security
- Keep dependencies updated
- Monitor for security vulnerabilities
- Regular backups of content

## Troubleshooting

### Common Issues

1. **Forms not submitting**
   - Check API Gateway URL
   - Verify CORS settings
   - Check Lambda logs

2. **Emails not received**
   - Check SES configuration
   - Verify email addresses
   - Check spam folder

3. **Build failures**
   - Check Node.js version
   - Clear node_modules and reinstall
   - Check for TypeScript errors

### Support
- Check AWS CloudWatch logs
- Use browser developer tools
- Test in incognito mode


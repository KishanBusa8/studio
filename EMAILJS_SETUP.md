# EmailJS Setup Guide

## 🚀 Making Your Contact Form Live

Your contact form is now configured to use EmailJS, which allows you to receive emails directly from your portfolio without needing a backend server.

## 📋 Setup Steps

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (e.g., `gmail`)

### 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

```html
Subject: New Contact Form Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio contact form:

**From:** {{from_name}} ({{from_email}})
**Subject:** {{subject}}

**Message:**
{{message}}

---
This message was sent from your portfolio contact form.
Reply directly to: {{reply_to}}
```

4. Save the template and note down your **Template ID** (e.g., `template_abc123`)

### 4. Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., `user_xyz789`)

### 5. Configure Environment Variables
1. Create a `.env.local` file in your project root
2. Add these variables:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Replace the placeholder values with your actual EmailJS credentials.

### 6. Test the Form
1. Restart your development server
2. Fill out the contact form
3. Submit and check your email

## 🔧 Alternative Solutions

### Option 2: Formspree (Even Simpler)
If you prefer an even simpler solution:

1. Go to [https://formspree.io/](https://formspree.io/)
2. Create a free account
3. Create a new form
4. Replace the form action with your Formspree endpoint

### Option 3: Netlify Forms
If you're deploying to Netlify:

1. Add `netlify` attribute to your form
2. Netlify will automatically handle form submissions
3. View submissions in your Netlify dashboard

### Option 4: Backend API
For more control, create a simple backend:

1. Use Vercel Functions or Netlify Functions
2. Send emails using Nodemailer or SendGrid
3. Handle form validation and spam protection

## 🛡️ Security & Spam Protection

### EmailJS Features:
- ✅ Built-in spam protection
- ✅ Rate limiting
- ✅ Email validation
- ✅ CAPTCHA support (optional)

### Additional Protection:
- Add reCAPTCHA to your form
- Implement rate limiting
- Add honeypot fields
- Use email validation

## 📧 Email Template Customization

You can customize the email template to include:
- Your logo/branding
- Professional formatting
- Auto-reply to sender
- Different templates for different purposes

## 🚀 Deployment

When deploying your portfolio:
1. Add the environment variables to your hosting platform
2. Test the form in production
3. Monitor for any issues

## 💡 Tips

- **Free Tier Limits**: EmailJS free tier allows 200 emails/month
- **Professional Plan**: Upgrade for more emails and features
- **Testing**: Always test in development before deploying
- **Backup**: Keep a backup contact method (direct email link)

## 🆘 Troubleshooting

### Common Issues:
1. **Emails not sending**: Check your EmailJS credentials
2. **Spam folder**: Check your spam folder for test emails
3. **CORS errors**: Make sure you're using the correct EmailJS package
4. **Template errors**: Verify your template variables match the code

### Support:
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Community: [https://community.emailjs.com/](https://community.emailjs.com/)

---

Your contact form will now send real emails to your inbox! 🎉 
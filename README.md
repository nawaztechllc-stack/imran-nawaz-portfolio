# Alex Rivera - Professional Portfolio

A modern, responsive portfolio website showcasing GRC expertise, cloud security skills, and professional achievements.

## 🌐 Live Site

**URL:** https://d3if7edapo1xiy.cloudfront.net

## 🎨 Features

- **Dark Mode Design** - Modern tech aesthetic with cyan accents
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Smooth Animations** - Scroll-triggered animations and hover effects
- **Fast Loading** - Deployed on AWS CloudFront CDN
- **SEO Optimized** - Meta tags and semantic HTML
- **Resume Download** - Direct PDF download button

## 📋 Sections

1. **Hero** - Professional title and quick actions
2. **About** - Professional summary and expertise
3. **Skills** - 6 categories of technical and soft skills
4. **Projects** - 2 featured projects with achievements
5. **Certifications** - 12 professional certifications
6. **Contact** - Email and LinkedIn with call-to-actions

## 🛠️ Built With

- **React 18** - UI framework
- **Vite 5** - Build tool and dev server
- **Lucide React** - Icon library
- **CSS3** - Custom styling with animations
- **AWS S3** - Static hosting
- **AWS CloudFront** - Global CDN

## 🚀 Local Development

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server will start at `http://localhost:5173`

## 📦 Deployment

### Quick Deploy

Use the provided PowerShell script:

```powershell
powershell -ExecutionPolicy Bypass -File deploy-portfolio.ps1
```

### Manual Deploy

```bash
# Build the project
npm run build

# Upload to S3
aws s3 sync dist/ s3://alex-rivera-portfolio-411805915740/ --delete --profile deployment --region us-east-1

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id E3I7TPLE65OHI --paths "/*" --profile deployment
```

## 📝 Customization

### Update Content

Edit `src/App.jsx` to modify:
- Personal information
- Professional summary
- Skills and certifications
- Projects and achievements
- Contact information

### Update Styling

Edit `src/App.css` to change:
- Color scheme (CSS variables at top)
- Layout and spacing
- Animations and transitions
- Responsive breakpoints

### Update Resume

Replace `public/ImranNawazresume.pdf` with your resume PDF.

## 🎨 Color Scheme

Current dark mode theme:

```css
--bg-primary: #0a0a0a      /* Main background */
--bg-secondary: #1a1a1a    /* Section backgrounds */
--bg-tertiary: #2a2a2a     /* Card backgrounds */
--text-primary: #ffffff    /* Main text */
--text-secondary: #b0b0b0  /* Secondary text */
--accent-primary: #00d4ff  /* Cyan accent */
--accent-secondary: #0099cc /* Darker cyan */
```

## 📱 Responsive Breakpoints

- **Desktop:** 1200px+
- **Tablet:** 768px - 1199px
- **Mobile:** < 768px
- **Small Mobile:** < 480px

## 🔧 Project Structure

```
portfolio-website/
├── public/
│   └── ImranNawazresume.pdf    # Resume PDF
├── src/
│   ├── App.jsx                  # Main React component
│   ├── App.css                  # Main styles
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles
├── dist/                        # Build output (generated)
├── deploy-portfolio.ps1         # Deployment script
├── package.json                 # Dependencies
├── vite.config.js              # Vite configuration
└── index.html                   # HTML template
```

## 🌐 AWS Resources

- **Stack:** alex-rivera-portfolio
- **Bucket:** alex-rivera-portfolio-411805915740
- **Distribution:** E3I7TPLE65OHI
- **Region:** us-east-1

See `DEPLOYMENT_INFO.md` for detailed AWS information.

## 💰 Cost

- **Current:** ~$0.10/month (FREE tier eligible)
- **After 12 months:** ~$1-2/month
- **With custom domain:** ~$2-3/month + $12-15/year domain

## 📊 Performance

- **Build Size:** ~170 KB (gzipped: ~50 KB)
- **Load Time:** < 1 second (global CDN)
- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)

## 🔒 Security

- HTTPS enabled via CloudFront
- S3 bucket not publicly accessible (CloudFront OAC)
- No sensitive data in client code
- Secure headers configured

## 📄 License

This portfolio is for personal use. Feel free to use as inspiration for your own portfolio.

## 👤 Contact

**Alex Rivera**
- Email: Imran.Nawaz@gmail.com
- LinkedIn: https://www.linkedin.com/in/nawaz-imran/

---

**Built with ❤️ using React and deployed on AWS**

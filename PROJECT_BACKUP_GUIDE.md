# Imran Nawaz Portfolio - Complete Project Backup Guide

**Created:** December 14, 2025  
**Purpose:** Complete documentation to recreate the portfolio from scratch

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [AWS Infrastructure](#aws-infrastructure)
3. [Project Structure](#project-structure)
4. [Key Customizations](#key-customizations)
5. [Content Details](#content-details)
6. [Deployment Process](#deployment-process)
7. [Complete File List](#complete-file-list)
8. [Step-by-Step Recreation](#step-by-step-recreation)

---

## 🎯 Project Overview

### What This Is
A professional GRC portfolio website built with React + Vite, deployed on AWS with a custom domain.

### Live URLs
- **Primary:** https://inawaztech.com
- **WWW:** https://www.inawaztech.com
- **CloudFront:** https://d3if7edapo1xiy.cloudfront.net

### Technology Stack
- **Frontend:** React 18.2.0
- **Build Tool:** Vite 5.0.8
- **Icons:** Lucide React 0.294.0
- **Hosting:** AWS S3 + CloudFront
- **Domain:** Route 53 (inawaztech.com)
- **SSL:** AWS Certificate Manager
- **Deployment:** PowerShell script

---

## ☁️ AWS Infrastructure

### Resources Created

#### CloudFormation Stack
- **Name:** `alex-rivera-portfolio` (references in code use `imran-nawaz-portfolio`)
- **Region:** us-east-1
- **Template:** Custom CloudFormation with existing ACM certificate

#### S3 Bucket
- **Name:** `alex-rivera-portfolio-411805915740`
- **Purpose:** Static website hosting
- **Public Access:** Blocked (CloudFront only)
- **Versioning:** Enabled

#### CloudFront Distribution
- **ID:** E3I7TPLE65OHI
- **Domain:** d3if7edapo1xiy.cloudfront.net
- **Custom Domain:** inawaztech.com, www.inawaztech.com
- **SSL Certificate:** ACM certificate in us-east-1
- **Cache:** Standard CloudFront caching

#### Route 53
- **Hosted Zone:** inawaztech.com
- **Records:** A and AAAA alias records pointing to CloudFront

#### ACM Certificate
- **Domain:** *.inawaztech.com, inawaztech.com
- **Region:** us-east-1 (required for CloudFront)
- **Validation:** DNS validation

### AWS CLI Profile
- **Profile Name:** deployment
- **Region:** us-east-1
- **Permissions Required:**
  - CloudFormation full access
  - S3 full access
  - CloudFront full access
  - Route 53 (if managing DNS)
  - ACM (if managing certificates)

---

## 📁 Project Structure

```
portfolio-website/
├── public/
│   ├── profile-picture.jpg (65 KB)
│   ├── ImranNawazresume.pdf (527 KB)
│   ├── Imranwebsitebackground.png (1.7 MB - not currently used)
│   ├── PROFILE_PICTURE_INSTRUCTIONS.md
│   └── BACKGROUND_IMAGE_INSTRUCTIONS.md
├── src/
│   ├── App.jsx (main component - 415 lines)
│   ├── App.css (styling - 753 lines)
│   └── main.jsx (entry point)
├── dist/ (build output - generated)
├── node_modules/ (dependencies - generated)
├── package.json
├── package-lock.json
├── vite.config.js
├── index.html
├── deploy-portfolio.ps1
├── DEPLOYMENT_INFO.md
├── cloudformation-custom-domain.yaml
└── PROJECT_BACKUP_GUIDE.md (this file)
```

---

## 🎨 Key Customizations

### Color Scheme (Medium Gray Theme)
```css
--bg-primary: #2d3748;      /* Medium slate gray */
--bg-secondary: #374151;    /* Slightly lighter gray */
--bg-tertiary: #4b5563;     /* Medium gray */
--text-primary: #f9fafb;    /* Off-white */
--text-secondary: #d1d5db;  /* Light gray */
--accent-primary: #00d4ff;  /* Cyan */
--accent-secondary: #0099cc;
--accent-hover: #00b8e6;
--border-color: #4b5563;
--shadow: rgba(0, 212, 255, 0.15);
```

### Header/Navigation
**Two-line tagline:**
- Line 1 (Bold): "Business-Aligned GRC. Trusted Outcomes."
- Line 2: "Helping teams move fast, securely, compliantly, and with measurable risk reduction."

### Hero Section
**Layout:** Profile picture on LEFT, content on RIGHT (centered on mobile)

**Content:**
- Name: Imran Nawaz
- Title: Senior GRC Manager | Cloud | Security | AI | Privacy
- Location: Clifton, VA
- Buttons: "Get in Touch" (email), "Learn More" (scroll to about)
- Social: LinkedIn icon
- Tagline bullets: "Trust. Built daily • Risk. Made actionable • Business goals. Aligned always • Governance. Enabling growth."

### About Section
**Three paragraphs:**

1. "A security, governance, risk, and compliance leader who's spent my career building programs that actually work in the real world—and stand up to audits. I've led cross-functional teams through the implementation and maturation of frameworks like NIST, CMMC, ISO 27001, ISO 42001, NIST AI RMF, FedRAMP, and DoD IL4/5/6. In addition I'm comfortable navigating HIPAA, SOC 2, PCI-DSS, and SOX requirements."

2. "A big part of my work has been risk management, audit readiness, third party risk management, process improvement, maturity security programs, and aligning security strategy with business objectives."

3. "More recently, I've been focused on AI governance and responsible AI, helping organizations make sure their AI initiatives are not only innovative, but also compliant, explainable, and aligned with ethical and regulatory expectations. I care about helping teams meet their security, compliance, and AI governance goals without slowing the business down."

4. "Outside of work, I enjoy spending time with my family, traveling, and staying active through sports and fitness."

### Skills Section (6 Categories)

#### 1. GRC Frameworks
- NIST RMF / 800-53
- NIST Cybersecurity Framework (CSF) 2.0
- CMMC 2.0
- ISO 27001 / ISO 42001
- NIST AI RMF
- FedRAMP
- DoD IL4/IL5/IL6
- FISMA
- HIPAA
- SOC 2
- PCI-DSS
- SOX

#### 2. Cloud & Infrastructure Security
- AWS Security & Compliance
- Azure Security & Compliance
- Multi-Cloud Governance
- Infrastructure as Code (IaC)
- Cloud Security Posture Management (CSPM)
- Identity & Access Management (IAM)

#### 3. Risk & Compliance Management
- Enterprise Risk Management (ERM)
- Third-Party Risk Management (TPRM)
- Continuous Monitoring & Assessment
- Audit Readiness & Response
- Control Testing & Validation
- Risk Register Management

#### 4. AI Governance & Responsible AI
- AI Risk Management Framework
- AI Ethics & Fairness
- Model Governance & Oversight
- Explainability & Transparency
- AI Policy Development
- Responsible AI Implementation

#### 5. Security Operations
- Security Program Development
- Policy & Procedure Development
- Incident Response Planning
- Vulnerability Management
- Security Awareness Training
- Metrics & Reporting

#### 6. Tools & Technologies
- GRC Platforms (ServiceNow, Archer, etc.)
- SIEM & Log Management
- Vulnerability Scanners
- Cloud Security Tools
- Documentation & Collaboration Tools
- Automation & Scripting

### Projects Section (2 Featured Projects)

#### Project 1: Enterprise GRC & Secure SDLC Implementation
**Description:**
"Designed and implemented an enterprise GRC program for a federal contractor, covering policy development, control frameworks (NIST RMF, DHS 4300A), and certification/accreditation (A&A/ATO) processes. Embedded security controls into the CI/CD pipeline and SDLC, reducing deployment risk and ensuring compliance without slowing down delivery teams."

**Tech Tags:**
- NIST RMF/800-53
- DHS 4300A
- GRC Platforms
- CI/CD
- Secure SDLC

**Key Achievements:**
- Led the build-out of an enterprise GRC function focused on policy, certification, and risk assessments
- Embedded security into CI/CD and the SDLC without impacting delivery timelines
- Standardized policy, control, and A&A/ATO artifact library, streamlining audits
- Designed executive risk and compliance dashboards for leadership visibility

#### Project 2: Multi-Cloud GRC & Third-Party Risk Management Program
**Description:**
"Led GRC initiatives across multiple AWS and Azure environments (IL-5/IL-6), ensuring controls met NIST 800-53, FISMA, FedRAMP, ISO 27001, and Army policy requirements. Managed and mentored a team of five, prioritizing risk reduction and audit readiness. Stood up and ran the third-party continuous monitoring program end-to-end."

**Tech Tags:**
- AWS
- Azure
- NIST 800-53
- FedRAMP
- ISO 27001
- IL-5/IL-6

**Key Achievements:**
- Led GRC for multi-cloud IL-5/IL-6 environments ensuring continuous compliance alignment
- Worked with cross-functional teams to build a third-party continuous monitoring program
- Cleared 300+ items in risk register through structured remediation planning
- Reduced audit response time with improved dashboards, metrics, and SLAs
- Maintained ISO 27001:2013 documentation for surveillance and recertification audits

### Certifications Section (10 Certifications - All Clickable to Credly)

**All link to:** https://www.credly.com/users/imran-nawaz.69e433a6/badges#credly

1. ISC2 – Certified Information Systems Security Professional (CISSP)
2. ISACA – Certified Information Security Manager (CISM)
3. ISACA – Certified in Risk and Information Systems Control (CRISC)
4. Cloud Security Alliance – Certificate of Cloud Security Knowledge (CCSK)
5. EC-Council – Certified Ethical Hacker (CEH)
6. CompTIA – Security+
7. GIAC – Security Essentials (GSEC)
8. (ISC)² – Certified Cloud Security Professional (CCSP)
9. PECB – ISO/IEC 27001 Lead Implementer
10. APMG International – ITIL 4 Foundation

### Contact Section
- Email: Imran.Nawaz@gmail.com
- LinkedIn: https://www.linkedin.com/in/nawaz-imran/
- Resume: ImranNawazresume.pdf (downloadable)

---

## 🚀 Deployment Process

### Prerequisites
1. AWS Account with CLI configured
2. AWS CLI profile named "deployment"
3. Node.js and npm installed
4. PowerShell (Windows)

### Deployment Script
Location: `deploy-portfolio.ps1`

**Usage:**
```powershell
cd "C:\Users\Imran\Desktop\my personal website\portfolio-website"
powershell -ExecutionPolicy Bypass -File deploy-portfolio.ps1
```

**What it does:**
1. Queries CloudFormation for bucket and distribution info
2. Runs `npm run build`
3. Syncs dist/ to S3 bucket
4. Creates CloudFront cache invalidation
5. Displays live URL

### Manual Deployment
```powershell
# Build
npm run build

# Upload to S3
aws s3 sync dist/ s3://alex-rivera-portfolio-411805915740/ --delete --profile deployment --region us-east-1

# Invalidate cache
aws cloudfront create-invalidation --distribution-id E3I7TPLE65OHI --paths "/*" --profile deployment
```

---

## 📄 Complete File List

### Critical Files to Backup

#### 1. package.json
```json
{
  "name": "imran-nawaz-portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.294.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.0.8"
  }
}
```

#### 2. vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    minify: 'esbuild'
  }
})
```

#### 3. index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Imran Nawaz - Senior GRC Manager specializing in Cloud, Security, AI, and Privacy" />
    <meta name="author" content="Imran Nawaz" />
    <title>Imran Nawaz - GRC Portfolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

#### 4. src/main.jsx
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

#### 5. Binary Files to Keep
- `public/profile-picture.jpg` (65,109 bytes)
- `public/ImranNawazresume.pdf` (527,285 bytes)
- `public/Imranwebsitebackground.png` (1,778,141 bytes - optional)

---

## 🔄 Step-by-Step Recreation

### Phase 1: Local Setup (30 minutes)

#### Step 1: Create Project Directory
```powershell
mkdir "C:\Users\Imran\Desktop\my personal website\portfolio-website"
cd "C:\Users\Imran\Desktop\my personal website\portfolio-website"
```

#### Step 2: Initialize Project
```powershell
npm create vite@latest . -- --template react
```

#### Step 3: Install Dependencies
```powershell
npm install
npm install lucide-react
```

#### Step 4: Copy Files
Copy the following from backup:
- `src/App.jsx` (full content from current project)
- `src/App.css` (full content from current project)
- `src/main.jsx`
- `index.html`
- `vite.config.js`
- `package.json`
- `public/profile-picture.jpg`
- `public/ImranNawazresume.pdf`

#### Step 5: Test Locally
```powershell
npm run dev
```
Visit http://localhost:5173

### Phase 2: AWS Infrastructure (1-2 hours)

#### Step 1: Configure AWS CLI
```powershell
aws configure --profile deployment
```
Enter:
- AWS Access Key ID
- AWS Secret Access Key
- Default region: us-east-1
- Default output format: json

#### Step 2: Request ACM Certificate (if needed)
1. Go to AWS Console → Certificate Manager (us-east-1)
2. Request public certificate
3. Domain names: inawaztech.com, *.inawaztech.com
4. Validation: DNS validation
5. Add CNAME records to Route 53
6. Wait for validation (5-30 minutes)

#### Step 3: Create CloudFormation Stack
Use the custom CloudFormation template in `cloudformation-custom-domain.yaml`

```powershell
aws cloudformation create-stack \
  --stack-name imran-nawaz-portfolio \
  --template-body file://cloudformation-custom-domain.yaml \
  --parameters \
    ParameterKey=DomainName,ParameterValue=inawaztech.com \
    ParameterKey=ProjectName,ParameterValue=imran-nawaz-portfolio \
    ParameterKey=CertificateArn,ParameterValue=arn:aws:acm:us-east-1:ACCOUNT:certificate/CERT-ID \
  --region us-east-1 \
  --profile deployment
```

#### Step 4: Wait for Stack Creation
```powershell
aws cloudformation wait stack-create-complete \
  --stack-name imran-nawaz-portfolio \
  --region us-east-1 \
  --profile deployment
```

#### Step 5: Get Stack Outputs
```powershell
aws cloudformation describe-stacks \
  --stack-name imran-nawaz-portfolio \
  --region us-east-1 \
  --profile deployment \
  --query "Stacks[0].Outputs"
```

Note the:
- S3 Bucket Name
- CloudFront Distribution ID
- CloudFront URL

### Phase 3: First Deployment (15 minutes)

#### Step 1: Build Project
```powershell
npm run build
```

#### Step 2: Upload to S3
```powershell
aws s3 sync dist/ s3://BUCKET-NAME/ --delete --profile deployment --region us-east-1
```

#### Step 3: Invalidate CloudFront
```powershell
aws cloudfront create-invalidation \
  --distribution-id DISTRIBUTION-ID \
  --paths "/*" \
  --profile deployment
```

#### Step 4: Test Website
Visit your CloudFront URL and custom domain

### Phase 4: Automation (10 minutes)

#### Step 1: Create Deployment Script
Copy `deploy-portfolio.ps1` from backup

Update the stack name if different:
```powershell
[string]$StackName = "imran-nawaz-portfolio"
```

#### Step 2: Test Deployment Script
```powershell
powershell -ExecutionPolicy Bypass -File deploy-portfolio.ps1
```

### Phase 5: DNS Configuration (if needed)

#### If Using External Registrar:
1. Get Route 53 nameservers from hosted zone
2. Update nameservers at your domain registrar
3. Wait for DNS propagation (up to 48 hours, usually faster)

#### If Using Route 53 for Registration:
DNS is automatically configured

---

## 🔐 Security & Access

### AWS Permissions Required
The deployment IAM user/role needs:
- `cloudformation:*`
- `s3:*`
- `cloudfront:*`
- `route53:*` (if managing DNS)
- `acm:*` (if managing certificates)

### Sensitive Information
**Never commit to Git:**
- AWS credentials
- `.env` files with secrets
- `node_modules/`
- `dist/` (build output)

### .gitignore
```
node_modules/
dist/
.env
.env.local
*.log
.DS_Store
```

---

## 📊 Monitoring & Maintenance

### Regular Tasks

#### Weekly:
- Check CloudFront metrics for traffic
- Review S3 storage costs

#### Monthly:
- Update dependencies: `npm update`
- Review and update content
- Check SSL certificate expiration (auto-renews)

#### As Needed:
- Update resume PDF
- Add new certifications
- Update projects
- Refresh profile picture

### Cost Monitoring
Expected monthly costs:
- S3: ~$0.10
- CloudFront: FREE (first 12 months), then ~$0.50-2
- Route 53: $0.50
- Total: ~$0.60-2.60/month

---

## 🆘 Troubleshooting

### Common Issues

#### 1. Changes Not Showing
**Solution:**
- Wait 1-2 minutes for cache invalidation
- Hard refresh browser (Ctrl+Shift+R)
- Check invalidation status in AWS Console

#### 2. Build Fails
**Solution:**
```powershell
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

#### 3. Deployment Script Fails
**Solution:**
- Check AWS credentials: `aws sts get-caller-identity --profile deployment`
- Verify stack exists: `aws cloudformation describe-stacks --stack-name imran-nawaz-portfolio --profile deployment`
- Check stack name in script matches actual stack

#### 4. SSL Certificate Issues
**Solution:**
- Ensure certificate is in us-east-1 (required for CloudFront)
- Verify DNS validation records are in place
- Wait for validation to complete

#### 5. Custom Domain Not Working
**Solution:**
- Check Route 53 alias records point to CloudFront
- Verify nameservers at registrar match Route 53
- Wait for DNS propagation (up to 48 hours)
- Test with: `nslookup inawaztech.com`

---

## 📦 Backup Checklist

### Files to Backup Regularly

#### Essential (Must Have):
- [ ] `src/App.jsx`
- [ ] `src/App.css`
- [ ] `src/main.jsx`
- [ ] `package.json`
- [ ] `vite.config.js`
- [ ] `index.html`
- [ ] `public/profile-picture.jpg`
- [ ] `public/ImranNawazresume.pdf`

#### Important (Should Have):
- [ ] `deploy-portfolio.ps1`
- [ ] `DEPLOYMENT_INFO.md`
- [ ] `cloudformation-custom-domain.yaml`
- [ ] `PROJECT_BACKUP_GUIDE.md` (this file)

#### Optional (Nice to Have):
- [ ] `public/PROFILE_PICTURE_INSTRUCTIONS.md`
- [ ] `public/BACKGROUND_IMAGE_INSTRUCTIONS.md`
- [ ] `public/Imranwebsitebackground.png`

### AWS Configuration to Document
- [ ] CloudFormation stack name
- [ ] S3 bucket name
- [ ] CloudFront distribution ID
- [ ] ACM certificate ARN
- [ ] Route 53 hosted zone ID
- [ ] AWS CLI profile name

---

## 🔄 Version History

### Current Version (December 14, 2025)
- Medium gray color scheme
- Profile picture on left, content on right
- Two-line header tagline
- Hero section with bullet points
- 10 clickable certifications
- 2 featured projects
- Updated About section with HIPAA
- Custom domain: inawaztech.com

### Key Changes Made:
1. Updated from dark mode to medium gray theme
2. Added profile picture with two-column layout
3. Updated header from multi-word tagline to two-line format
4. Added hero tagline bullets below LinkedIn
5. Made all certifications clickable to Credly
6. Updated project achievements
7. Added HIPAA to compliance frameworks
8. Removed "Open to Hybrid or Remote" from location

---

## 📞 Support Resources

### Documentation
- **React:** https://react.dev/
- **Vite:** https://vitejs.dev/
- **AWS CloudFormation:** https://docs.aws.amazon.com/cloudformation/
- **AWS S3:** https://docs.aws.amazon.com/s3/
- **AWS CloudFront:** https://docs.aws.amazon.com/cloudfront/
- **Lucide Icons:** https://lucide.dev/

### AWS Console Links
- **CloudFormation:** https://console.aws.amazon.com/cloudformation
- **S3:** https://console.aws.amazon.com/s3
- **CloudFront:** https://console.aws.amazon.com/cloudfront
- **Route 53:** https://console.aws.amazon.com/route53
- **ACM:** https://console.aws.amazon.com/acm

---

## ✅ Quick Recovery Steps

### If Everything Is Lost:

1. **Install Prerequisites** (30 min)
   - Install Node.js
   - Install AWS CLI
   - Configure AWS CLI profile

2. **Recreate Project** (1 hour)
   - Create Vite React project
   - Copy App.jsx and App.css from this backup
   - Copy all files from backup checklist
   - Run `npm install`
   - Test locally with `npm run dev`

3. **Rebuild AWS Infrastructure** (1-2 hours)
   - Request ACM certificate (if needed)
   - Create CloudFormation stack
   - Wait for stack creation
   - Note bucket and distribution IDs

4. **Deploy** (15 min)
   - Build project: `npm run build`
   - Upload to S3
   - Invalidate CloudFront cache
   - Test website

5. **Configure DNS** (if needed)
   - Update nameservers at registrar
   - Wait for propagation

**Total Time: 3-4 hours**

---

## 🎯 Success Criteria

Your portfolio is successfully recreated when:
- [ ] Website loads at https://inawaztech.com
- [ ] All sections display correctly (About, Skills, Projects, Certifications, Contact)
- [ ] Profile picture displays
- [ ] All 10 certifications link to Credly
- [ ] Resume downloads
- [ ] LinkedIn link works
- [ ] Email link works
- [ ] Mobile responsive design works
- [ ] SSL certificate is valid
- [ ] Medium gray color scheme is applied
- [ ] Hero tagline bullets display correctly
- [ ] Header shows two-line tagline

---

## 📝 Notes

### Important Reminders:
1. Always backup before making major changes
2. Test locally before deploying
3. Wait for cache invalidation after deployment
4. Keep AWS credentials secure
5. Monitor costs monthly
6. Update content regularly
7. Keep dependencies updated

### Future Enhancements to Consider:
- Add Google Analytics
- Add blog section
- Add more projects
- Add testimonials
- Add case studies
- Implement dark/light mode toggle
- Add animations
- Add contact form with backend

---

**This guide contains everything needed to recreate your portfolio from scratch. Keep this file and the backup files in a safe location!**

**Last Updated:** December 14, 2025  
**Portfolio Version:** 2.0  
**Status:** Production Ready ✅

# Imran Nawaz Portfolio - Deployment Information

## 🎉 Your Portfolio is Live!

**Primary URL:** https://inawaztech.com  
**WWW URL:** https://www.inawaztech.com  
**CloudFront URL:** https://d3if7edapo1xiy.cloudfront.net

---

## 📋 Deployment Details

### AWS Resources Created

- **CloudFormation Stack:** `imran-nawaz-portfolio`
- **S3 Bucket:** `imran-nawaz-portfolio-411805915740`
- **CloudFront Distribution ID:** `E3I7TPLE65OHI`
- **Region:** `us-east-1`
- **AWS Profile:** `deployment`

### What Was Deployed

- ✅ Professional portfolio website with dark mode design
- ✅ Responsive layout (mobile, tablet, desktop)
- ✅ About section with professional summary
- ✅ Skills section with 6 categories
- ✅ Projects section with 2 featured projects
- ✅ Certifications section with 12 certifications
- ✅ Contact section with email and LinkedIn
- ✅ Resume download (ImranNawazresume.pdf)

---

## 🔄 How to Update Your Portfolio

### Quick Update (Recommended)

Run the deployment script from the portfolio directory:

```powershell
cd "C:\Users\Imran\Desktop\my personal website\portfolio-website"
powershell -ExecutionPolicy Bypass -File deploy-portfolio.ps1
```

This will:
1. Build your project
2. Upload files to S3
3. Invalidate CloudFront cache
4. Show your live URL

### Manual Update

If you prefer to do it manually:

```powershell
# 1. Build the project
npm run build

# 2. Upload to S3
aws s3 sync dist/ s3://imran-nawaz-portfolio-411805915740/ --delete --profile deployment --region us-east-1

# 3. Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id E3I7TPLE65OHI --paths "/*" --profile deployment
```

---

## 📝 Making Content Changes

### Update Your Information

Edit the following file to change content:
- **File:** `src/App.jsx`
- **Sections:** About, Skills, Projects, Certifications, Contact

### Update Styling

Edit the following file to change colors/design:
- **File:** `src/App.css`
- **Current Theme:** Dark mode with cyan accent

### Replace Resume

Replace the PDF file:
- **Location:** `public/ImranNawazresume.pdf`
- Then redeploy using the script above

---

## 🌐 Custom Domain (Optional)

If you want to add a custom domain later:

1. Register domain in Route 53 or your registrar
2. Request SSL certificate in ACM (us-east-1)
3. Update CloudFormation stack with domain parameters
4. Update nameservers (if using external registrar)

See `aws-deployment-kit/PREREQUISITES.md` for detailed instructions.

---

## 💰 Cost Estimate

### Current Setup (No Domain)

- **S3 Storage:** ~$0.10/month (small site)
- **CloudFront:** FREE for first 12 months (then ~$0.50-2/month)
- **Total:** ~$0.10/month (FREE tier eligible)

### With Custom Domain (Future)

- **Domain:** $12-15/year
- **Route 53 Hosted Zone:** $0.50/month
- **S3 + CloudFront:** ~$0.10-2/month
- **Total:** ~$1-3/month + domain

---

## 🔧 Troubleshooting

### Changes Not Showing?

1. Wait 1-2 minutes for cache invalidation
2. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
3. Check invalidation status:
   ```powershell
   aws cloudfront get-invalidation --distribution-id E3I7TPLE65OHI --id <INVALIDATION_ID> --profile deployment
   ```

### Deployment Failed?

1. Check AWS credentials:
   ```powershell
   aws sts get-caller-identity --profile deployment
   ```

2. Check stack status:
   ```powershell
   aws cloudformation describe-stacks --stack-name imran-nawaz-portfolio --region us-east-1 --profile deployment
   ```

3. View error logs:
   ```powershell
   aws cloudformation describe-stack-events --stack-name imran-nawaz-portfolio --region us-east-1 --profile deployment --max-items 10
   ```

---

## 📊 Monitoring

### View CloudFront Metrics

1. Go to AWS Console: https://console.aws.amazon.com/cloudfront
2. Click on distribution: `E3I7TPLE65OHI`
3. View "Monitoring" tab for traffic stats

### View S3 Usage

1. Go to AWS Console: https://console.aws.amazon.com/s3
2. Click on bucket: `imran-nawaz-portfolio-411805915740`
3. View "Metrics" tab

---

## 🗑️ Cleanup (If Needed)

To delete all resources and stop charges:

```powershell
# Delete CloudFormation stack (this deletes everything)
aws cloudformation delete-stack --stack-name imran-nawaz-portfolio --region us-east-1 --profile deployment

# Wait for deletion to complete
aws cloudformation wait stack-delete-complete --stack-name imran-nawaz-portfolio --region us-east-1 --profile deployment
```

**Note:** This will permanently delete your portfolio and all files!

---

## 📞 Support

- **AWS Documentation:** https://docs.aws.amazon.com/
- **CloudFormation:** https://docs.aws.amazon.com/cloudformation/
- **CloudFront:** https://docs.aws.amazon.com/cloudfront/
- **S3:** https://docs.aws.amazon.com/s3/

---

## 🎯 Next Steps

1. ✅ Visit your live portfolio: https://d3if7edapo1xiy.cloudfront.net
2. ✅ Test all links and features
3. ✅ Share with colleagues and on LinkedIn
4. 📱 Test on mobile devices
5. 🎨 Customize colors/content if desired
6. 🌐 Consider adding custom domain
7. 📊 Set up Google Analytics (optional)

---

**Congratulations! Your professional portfolio is now live on AWS!** 🎉

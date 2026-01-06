# Custom Domain Configuration - inawaztech.com

## 🌐 Your Portfolio URLs

Once the CloudFormation update completes, your portfolio will be accessible at:

- **Primary:** https://inawaztech.com
- **WWW:** https://www.inawaztech.com
- **CloudFront:** https://d3if7edapo1xiy.cloudfront.net (still works)

---

## 📋 Configuration Details

### Domain Information
- **Domain:** inawaztech.com
- **Hosted Zone ID:** Z0801456PGE2APIYHDKB
- **SSL Certificate ARN:** arn:aws:acm:us-east-1:411805915740:certificate/d15e8e8d-2762-450f-b769-237872a6630d
- **Certificate Status:** ISSUED ✅
- **Certificate Covers:** inawaztech.com, www.inawaztech.com

### AWS Resources
- **CloudFormation Stack:** alex-rivera-portfolio
- **S3 Bucket:** alex-rivera-portfolio-411805915740
- **CloudFront Distribution:** E3I7TPLE65OHI
- **Region:** us-east-1

---

## ⏱️ Timeline

### Current Status
- ✅ SSL Certificate already issued
- ✅ Route 53 Hosted Zone exists
- 🔄 CloudFormation stack updating (10-15 minutes)
- ⏳ DNS records will be created automatically
- ⏳ DNS propagation (5-10 minutes after stack completes)

### When Will It Work?
- **CloudFormation Update:** ~10-15 minutes
- **DNS Propagation:** Additional 5-10 minutes
- **Total Time:** ~15-25 minutes from start

---

## 🧪 Testing Your Domain

### Check DNS Records

Once the stack update completes, verify DNS records:

```powershell
# Check if inawaztech.com points to CloudFront
nslookup inawaztech.com

# Check www subdomain
nslookup www.inawaztech.com
```

Both should show CloudFront addresses.

### Test in Browser

1. Visit https://inawaztech.com
2. Visit https://www.inawaztech.com
3. Both should show your portfolio with valid SSL

### Check SSL Certificate

In your browser:
1. Click the padlock icon in the address bar
2. View certificate details
3. Should show "inawaztech.com" issued by Amazon

---

## 🔄 Deployment Process

The deployment script works the same way:

```powershell
cd "C:\Users\Imran\Desktop\my personal website\portfolio-website"
powershell -ExecutionPolicy Bypass -File deploy-portfolio.ps1
```

This will:
1. Build your project
2. Upload to S3
3. Invalidate CloudFront cache
4. Your changes will appear on inawaztech.com

---

## 📊 What Changed

### Before (No Custom Domain)
- ❌ Only accessible via CloudFront URL
- ❌ Long, unmemorable URL
- ✅ HTTPS enabled

### After (With Custom Domain)
- ✅ Accessible via inawaztech.com
- ✅ Professional, branded URL
- ✅ HTTPS with your domain
- ✅ Both root and www work
- ✅ CloudFront URL still works

---

## 🔍 Troubleshooting

### Domain Not Working Yet?

**If inawaztech.com doesn't load:**

1. **Check CloudFormation Status:**
   ```powershell
   aws cloudformation describe-stacks --stack-name alex-rivera-portfolio --region us-east-1 --profile deployment --query "Stacks[0].StackStatus"
   ```
   - Should show `UPDATE_COMPLETE`

2. **Check DNS Records:**
   ```powershell
   aws route53 list-resource-record-sets --hosted-zone-id Z0801456PGE2APIYHDKB --profile deployment --query "ResourceRecordSets[?Name=='inawaztech.com.']"
   ```
   - Should show A record pointing to CloudFront

3. **Wait for DNS Propagation:**
   - Can take 5-10 minutes
   - Try in incognito/private browsing mode
   - Clear browser cache

### SSL Certificate Error?

If you see SSL warnings:
- Wait a few more minutes for CloudFront to fully deploy
- Clear browser cache and try again
- The certificate is valid and already issued

### Still Shows CloudFront URL?

- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Try different browser
- Wait for DNS propagation

---

## 💡 Benefits of Custom Domain

1. **Professional Branding**
   - inawaztech.com is memorable
   - Looks professional on resume/LinkedIn
   - Easy to share

2. **SEO Benefits**
   - Better for search engine rankings
   - Custom domain is more trustworthy
   - Branded URL in search results

3. **Flexibility**
   - Can add subdomains later (blog.inawaztech.com, etc.)
   - Full control over DNS
   - Can move to different hosting if needed

4. **Trust & Credibility**
   - Custom domain shows professionalism
   - SSL with your domain name
   - No "cloudfront.net" in URL

---

## 📧 Email Setup (Optional Future Enhancement)

With your domain, you could also set up:
- **Professional Email:** contact@inawaztech.com
- **Contact Form:** Using AWS SES
- **Subdomains:** blog.inawaztech.com, api.inawaztech.com

See `aws-deployment-kit/CONTACT_FORM_SETUP.md` for details.

---

## 🎯 Next Steps

1. **Wait for stack update to complete** (~10-15 minutes)
2. **Test your domain** - Visit https://inawaztech.com
3. **Update your profiles:**
   - LinkedIn: Add inawaztech.com as your website
   - Resume: Include your custom domain
   - Email signature: Link to inawaztech.com
4. **Share your portfolio!**

---

## 📞 Support

If you encounter issues:

1. Check CloudFormation events:
   ```powershell
   aws cloudformation describe-stack-events --stack-name alex-rivera-portfolio --region us-east-1 --profile deployment --max-items 10
   ```

2. Check CloudFront distribution status:
   ```powershell
   aws cloudfront get-distribution --id E3I7TPLE65OHI --profile deployment --query "Distribution.Status"
   ```
   - Should show "Deployed"

3. Verify certificate is attached:
   ```powershell
   aws cloudfront get-distribution --id E3I7TPLE65OHI --profile deployment --query "Distribution.DistributionConfig.ViewerCertificate"
   ```

---

**Your portfolio will soon be live at https://inawaztech.com!** 🎉

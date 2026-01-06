# Portfolio Deployment Script
# This script deploys the portfolio to AWS S3 and invalidates CloudFront cache

param(
    [Parameter(Mandatory=$false)]
    [string]$Profile = "deployment",
    
    [Parameter(Mandatory=$false)]
    [string]$StackName = "imran-nawaz-portfolio",
    
    [Parameter(Mandatory=$false)]
    [string]$Region = "us-east-1"
)

Write-Host "Deploying Imran Nawaz Portfolio..." -ForegroundColor Cyan
Write-Host ""

# Get stack outputs
Write-Host "Getting deployment information from CloudFormation..." -ForegroundColor Yellow
$outputs = aws cloudformation describe-stacks `
    --stack-name $StackName `
    --region $Region `
    --profile $Profile `
    --query "Stacks[0].Outputs" `
    --output json | ConvertFrom-Json

if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to get stack information. Make sure the stack exists." -ForegroundColor Red
    exit 1
}

$bucketName = ($outputs | Where-Object { $_.OutputKey -eq "WebsiteBucketName" }).OutputValue
$distributionId = ($outputs | Where-Object { $_.OutputKey -eq "CloudFrontDistributionId" }).OutputValue
$websiteUrl = ($outputs | Where-Object { $_.OutputKey -eq "CloudFrontURL" }).OutputValue

Write-Host "   Bucket: $bucketName" -ForegroundColor Green
Write-Host "   Distribution: $distributionId" -ForegroundColor Green
Write-Host "   URL: $websiteUrl" -ForegroundColor Green
Write-Host ""

# Build the project
Write-Host "Building project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "Build complete!" -ForegroundColor Green
Write-Host ""

# Upload to S3
Write-Host "Uploading files to S3..." -ForegroundColor Yellow
aws s3 sync dist/ s3://$bucketName/ `
    --delete `
    --profile $Profile `
    --region $Region

if ($LASTEXITCODE -ne 0) {
    Write-Host "Upload failed!" -ForegroundColor Red
    exit 1
}

Write-Host "Files uploaded!" -ForegroundColor Green
Write-Host ""

# Invalidate CloudFront cache
Write-Host "Invalidating CloudFront cache..." -ForegroundColor Yellow
$invalidation = aws cloudfront create-invalidation `
    --distribution-id $distributionId `
    --paths "/*" `
    --profile $Profile `
    --output json | ConvertFrom-Json

if ($LASTEXITCODE -ne 0) {
    Write-Host "Cache invalidation failed!" -ForegroundColor Red
    exit 1
}

$invalidationId = $invalidation.Invalidation.Id
Write-Host "Cache invalidation started (ID: $invalidationId)" -ForegroundColor Green
Write-Host ""

# Summary
Write-Host "Deployment Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Your portfolio is now live at:" -ForegroundColor Cyan
Write-Host "   $websiteUrl" -ForegroundColor White
Write-Host ""
Write-Host "Note: Cache invalidation may take 1-2 minutes to complete." -ForegroundColor Yellow
Write-Host ""

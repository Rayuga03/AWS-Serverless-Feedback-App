# AWS-Serverless-Feedback-App


Architecture Flow

User → CloudFront → S3 → API Gateway → Lambda → DynamoDB

S3
Hosts static web files (HTML, CSS, JS)

API Gateway
Exposes REST APIs

Lambda
Processes GET and POST requests

DynamoDB
Stores feedback data

CloudFront
Provides secure HTTPS access and CDN caching

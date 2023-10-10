This is a measurement of how performance of s3 deployment resource changes with memory setting.

All samples taken by:
1. Adjusting memory settings
2. Executing `npx cdk deploy` to stabilize
3. Editing `c.txt` file by appending content (to make sure new asset hash is generated)
4. Executing `npx cdk deploy --hotswap-fallback --method=direct` (in table below)

Verbose logs are in `hotswap_s3_log_XX_XX.txt` files.

| Memory  (MB)  | Deployment time (hotswap) |
|---------------|---------------------------|
| 128 (default) | 38.48s                    |
| 512           | 9.91s                     |
| 1024          | 5.36s                     |
| 3008          | 3.18s                     |
| 3009          | 3.44s                     |
| 5307          | 3.41s                     |
| 7076          | 3.4s                      |
| 8845          | 3.08s                     |
| 10240         | 3.34s                     |


Resources:
https://docs.aws.amazon.com/lambda/latest/operatorguide/computing-power.html
https://stackoverflow.com/questions/66522916/aws-lambda-memory-vs-cpu-configuration
https://aws.amazon.com/about-aws/whats-new/2020/12/aws-lambda-supports-10gb-memory-6-vcpu-cores-lambda-functions/

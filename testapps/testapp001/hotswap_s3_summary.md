This is a measurement of how performance of s3 deployment resource changes with memory setting.

All samples taken by:
1. Adjusting memory settings
2. Executing `npx cdk deploy` to stabilize
3. Editing `c.txt` file by appending content (to make sure new asset hash is generated)
4. Executing `npx cdk deploy --hotswap-fallback --method=direct` (in table below)

Verbose logs are in `hotswap_s3_log_XX_XX.txt` files.
Cloudwatch logs can be found in `hotswap_s3_cloudwatch_logs.md` file.
Record of this experiment can be found in commit list of https://github.com/sobolk/aws-cdk/pull/2 .

| Memory  (MB)  | Deployment time (hotswap) | Billed Lambda Duration | Estimated cost of 1000000 invocations |
|---------------|---------------------------|------------------------|---------------------------------------|
| 128 (default) | 38.48s                    | 37608ms                | $78.55                                |
| 512           | 9.91s                     | 8984ms                 | $75.07                                |
| 1024          | 5.36s                     | 4396ms                 | $73.47                                |
| 1536          | 3.67s                     | 2779ms                 | $69.68                                |
| 2048          | 3.44s                     | 2551ms                 | $85.23                                |
| 3008          | 3.18s                     | 2167ms                 | $106.29                               |
| 3009          | 3.44s                     | 2520ms                 | $123.62                               |
| 5307          | 3.41s                     | 2492ms                 | $215.45                               |
| 7076          | 3.4s                      | 2475ms                 | $285.24                               |
| 8845          | 3.08s                     | 2204ms                 | $317.49                               |
| 10240         | 3.34s                     | 2475ms                 | $412.70                               |


Resources:

1. https://docs.aws.amazon.com/lambda/latest/operatorguide/computing-power.html
2. https://stackoverflow.com/questions/66522916/aws-lambda-memory-vs-cpu-configuration
3. https://aws.amazon.com/about-aws/whats-new/2020/12/aws-lambda-supports-10gb-memory-6-vcpu-cores-lambda-functions/
4. https://github.com/aws/aws-cdk/issues/7950
5. https://www.reddit.com/r/aws/comments/10l2fep/aws_cli_in_lambda_custom_runtime_is_inexplicably/
6. https://stackoverflow.com/questions/52605924/aws-cli-s3-cp-performance-is-painfully-slow
7. https://aws.amazon.com/lambda/pricing/

# Overview

This is a measurement of how performance of s3 deployment resource changes with memory setting.

# Data

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


# Observations

1. The asset used for tests is light, 3 files, in range of 350-400 Bytes when zipped which is much less than standard
   buffer size used by http clients (4kB or 8kB). Therefore, it shows that inefficiencies are present in 
   s3 deployment lambda implementation, i.e. using Python and delegating to AWS CLI also written in python and demanding
   resources.
2. When using default lambda settings, i.e. 128 MB, the lambda seems to be running into deep garbage collection cycles.
   In other runs reported memory usage stabilized around 136MB. This explains why latency on 128MB is so large comparing to other samples.
3. Past 512, the processing logic seems to benefit from additional cores (AWS CLI may attempt to upload 3 files in parallel).
4. Performance levels out past 2048. (Remember this is baseline demand given small asset size).
5. Incurred cost remains at similar level until performance gain levels out.
6. There seems to be constant ~1s difference between lambda execution and reported hotswap deployment duration.
7. Lambda latency even after optimization is not satisfactory given asset size. The IPC calls to AWS CLI to
   fetch asset zip and then synchronize it with bucket both take ~1-2s respectively. Which takes fractions of seconds if
   executed in the same process via SDK calls.

# Opportunities for improvements

1. Tweak memory settings (this can be done on CDK caller side).
2. ~~Eliminate IPC calls in s3 deployment bucket (there are articles on the Internet indicating successful attempts
   to load AWS CLI as library, both lambda and AWS CLI are written in python).~~ This appears to be not feasible due to:
   1. `AwsCliLayer` seems to be using old CLI through v1 CDK , see (here)[https://github.com/aws/aws-cdk/blob/73f256dda9cf434f3727004225223fe0919503d6/packages/aws-cdk-lib/lambda-layer-awscli/lib/awscli-layer.ts#L1]. Following this reference reveals CLI version `1.27.165` at the time of writing this.
   2. Loading CLI requires file system lookup, i.e. additional coupling between s3 deployment lambda and layer.
   3. AWS CLI v2 distribution seems to bundle python distro and its code into single binary, i.e. there's nothing to load from file system to python program. Which means this option won't work with latest AWS CLI.
   4. AWS CLI S3 encapsulates data transfer features that are not found in other libraries.
3. Eliminate lambda call from hotswap logic and upload asset directly to target bucket from local workspace.

# Resources

1. https://docs.aws.amazon.com/lambda/latest/operatorguide/computing-power.html
2. https://stackoverflow.com/questions/66522916/aws-lambda-memory-vs-cpu-configuration
3. https://aws.amazon.com/about-aws/whats-new/2020/12/aws-lambda-supports-10gb-memory-6-vcpu-cores-lambda-functions/
4. https://github.com/aws/aws-cdk/issues/7950
5. https://www.reddit.com/r/aws/comments/10l2fep/aws_cli_in_lambda_custom_runtime_is_inexplicably/
6. https://stackoverflow.com/questions/52605924/aws-cli-s3-cp-performance-is-painfully-slow
7. https://aws.amazon.com/lambda/pricing/

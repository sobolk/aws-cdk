# testapp010


## npm run hotswap


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp010 import 'source-map-support/register' | 0.000&pm;0.001s |
| ✨  Testapp010 import * as cdk from 'aws-cdk-lib' | 0.121&pm;0.004s |
| ✨  Testapp010Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp010Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp010Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.015&pm;0.001s |
| ✨  Testapp010Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.046&pm;0.002s |
| ✨  Testapp010Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.004&pm;0.000s |
| ✨  Testapp010Stack all import | 0.066&pm;0.003s |
| ✨  Testapp010 import { Testapp010Stack } from '../lib/testapp010-stack' | 0.084&pm;0.003s |
| ✨  Testapp010 all import | 0.206&pm;0.006s |
| ✨  Testapp001Stack ctor minus super() | 0.012&pm;0.001s |
| ✨  Testapp010 total processing time | 0.255&pm;0.008s |
| ✨  Testapp010 processing time no imports | 0.049&pm;0.002s |
| ✨  Synthesis time | 0.718&pm;0.017s |
| ✨  Deployment time | 0.435&pm;0.025s |
| ✨  Total time | 1.152&pm;0.034s |
| real | 3.021&pm;0.166s |
| user | 1.691&pm;0.041s |
| sys | 0.235&pm;0.012s |


## npm run synth


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp010 import 'source-map-support/register' | 0.001&pm;0.001s |
| ✨  Testapp010 import * as cdk from 'aws-cdk-lib' | 0.124&pm;0.011s |
| ✨  Testapp010Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp010Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp010Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.016&pm;0.003s |
| ✨  Testapp010Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.048&pm;0.006s |
| ✨  Testapp010Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.004&pm;0.001s |
| ✨  Testapp010Stack all import | 0.068&pm;0.009s |
| ✨  Testapp010 import { Testapp010Stack } from '../lib/testapp010-stack' | 0.086&pm;0.009s |
| ✨  Testapp010 all import | 0.211&pm;0.020s |
| ✨  Testapp001Stack ctor minus super() | 0.012&pm;0.001s |
| ✨  Testapp010 total processing time | 0.260&pm;0.020s |
| ✨  Testapp010 processing time no imports | 0.049&pm;0.001s |
| real | 1.305&pm;0.146s |
| user | 1.228&pm;0.019s |
| sys | 0.192&pm;0.021s |


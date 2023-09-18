# testapp005


## npm run hotswap


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp005 import 'source-map-support/register' | 0.000&pm;0.001s |
| ✨  Testapp005 import { App } from '@aws-cdk/core' | 0.065&pm;0.002s |
| ✨  Testapp005Stack import { Stack, StackProps } from '@aws-cdk/core' | 0.000&pm;0.000s |
| ✨  Testapp005Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp005Stack import { Bucket } from '@aws-cdk/aws-s3' | 0.027&pm;0.002s |
| ✨  Testapp005Stack import * as lambda from '@aws-cdk/aws-lambda' | 0.079&pm;0.004s |
| ✨  Testapp005Stack import * as s3deploy from '@aws-cdk/aws-s3-deployment' | 0.005&pm;0.001s |
| ✨  Testapp005Stack all import | 0.111&pm;0.006s |
| ✨  Testapp005 import { Testapp005Stack } from '../lib/testapp005-stack' | 0.132&pm;0.007s |
| ✨  Testapp005 all import | 0.199&pm;0.007s |
| ✨  Testapp005Stack ctor minus super() | 0.041&pm;0.006s |
| ✨  Testapp005 total processing time | 0.297&pm;0.012s |
| ✨  Testapp005 processing time no imports | 0.099&pm;0.006s |
| ✨  Synthesis time | 1.505&pm;0.025s |
| ✨  Deployment time | 0.429&pm;0.032s |
| ✨  Total time | 1.935&pm;0.039s |
| real | 6.061&pm;0.111s |
| user | 6.279&pm;0.070s |
| sys | 0.928&pm;0.015s |


## npm run synth


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp005 import 'source-map-support/register' | 0.000&pm;0.001s |
| ✨  Testapp005 import { App } from '@aws-cdk/core' | 0.073&pm;0.016s |
| ✨  Testapp005Stack import { Stack, StackProps } from '@aws-cdk/core' | 0.000&pm;0.000s |
| ✨  Testapp005Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp005Stack import { Bucket } from '@aws-cdk/aws-s3' | 0.029&pm;0.006s |
| ✨  Testapp005Stack import * as lambda from '@aws-cdk/aws-lambda' | 0.089&pm;0.015s |
| ✨  Testapp005Stack import * as s3deploy from '@aws-cdk/aws-s3-deployment' | 0.005&pm;0.002s |
| ✨  Testapp005Stack all import | 0.123&pm;0.021s |
| ✨  Testapp005 import { Testapp005Stack } from '../lib/testapp005-stack' | 0.144&pm;0.021s |
| ✨  Testapp005 all import | 0.219&pm;0.036s |
| ✨  Testapp005Stack ctor minus super() | 0.040&pm;0.005s |
| ✨  Testapp005 total processing time | 0.315&pm;0.038s |
| ✨  Testapp005 processing time no imports | 0.097&pm;0.005s |
| real | 5.306&pm;0.297s |
| user | 6.000&pm;0.080s |
| sys | 0.935&pm;0.099s |


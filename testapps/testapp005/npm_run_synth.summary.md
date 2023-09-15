# testapp005

## npm run synth


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp005 import 'source-map-support/register' | 0.000&pm;0.000 |
| ✨  Testapp005 import { App } from '@aws-cdk/core' | 0.071&pm;0.017 |
| ✨  Testapp005Stack import { Stack, StackProps } from '@aws-cdk/core' | 0.000&pm;0.000 |
| ✨  Testapp005Stack import { Construct } from 'constructs' | 0.000&pm;0.000 |
| ✨  Testapp005Stack import { Bucket } from '@aws-cdk/aws-s3' | 0.027&pm;0.006 |
| ✨  Testapp005Stack import * as lambda from '@aws-cdk/aws-lambda' | 0.087&pm;0.016 |
| ✨  Testapp005Stack import * as s3deploy from '@aws-cdk/aws-s3-deployment' | 0.005&pm;0.001 |
| ✨  Testapp005Stack all import | 0.119&pm;0.022 |
| ✨  Testapp005 import { Testapp005Stack } from '../lib/testapp005-stack' | 0.139&pm;0.023 |
| ✨  Testapp005 all import | 0.211&pm;0.039 |
| ✨  Testapp005Stack ctor minus super() | 0.036&pm;0.001 |
| ✨  Testapp005 total processing time | 0.301&pm;0.042 |
| ✨  Testapp005 processing time no imports | 0.090&pm;0.003 |
| real | 5.049&pm;0.342 |
| user | 5.804&pm;0.130 |
| sys | 0.819&pm;0.103 |

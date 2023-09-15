# testapp003

## npm run synth


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp003 import 'source-map-support/register' | 0.001&pm;0.001 |
| ✨  Testapp003 import * as cdk from 'aws-cdk-lib' | 0.121&pm;0.016 |
| ✨  Testapp003Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000 |
| ✨  Testapp003Stack import { Construct } from 'constructs' | 0.000&pm;0.000 |
| ✨  Testapp003Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.016&pm;0.004 |
| ✨  Testapp003Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.048&pm;0.010 |
| ✨  Testapp003Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.004&pm;0.001 |
| ✨  Testapp003Stack all import | 0.068&pm;0.014 |
| ✨  Testapp003 import { Testapp003Stack } from '../lib/testapp003-stack' | 0.089&pm;0.014 |
| ✨  Testapp003 all import | 0.211&pm;0.030 |
| ✨  Testapp001Stack ctor minus super() | 0.012&pm;0.001 |
| ✨  Testapp003 total processing time | 0.260&pm;0.031 |
| ✨  Testapp003 processing time no imports | 0.048&pm;0.002 |
| real | 2.699&pm;0.181 |
| user | 3.874&pm;0.035 |
| sys | 0.371&pm;0.025 |

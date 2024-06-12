# testapp012

## npm run synth


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp012 import 'source-map-support/register' | 0.006&pm;0.001s |
| ✨  Testapp012 import * as cdk from 'aws-cdk-lib' | 0.125&pm;0.013s |
| ✨  Testapp012Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp012Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp012Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.015&pm;0.002s |
| ✨  Testapp012Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.052&pm;0.007s |
| ✨  Testapp012Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.004&pm;0.001s |
| ✨  Testapp012Stack all import | 0.072&pm;0.010s |
| ✨  Testapp012 import { Testapp012Stack } from '../lib/testapp012-stack' | 0.072&pm;0.010s |
| ✨  Testapp012 all import | 0.204&pm;0.024s |
| ✨  Testapp001Stack ctor minus super() | 0.013&pm;0.001s |
| ✨  Testapp012 total processing time | 0.253&pm;0.025s |
| ✨  Testapp012 processing time no imports | 0.049&pm;0.001s |
| real | 2.849&pm;0.176s |
| user | 4.053&pm;0.072s |
| sys | 0.424&pm;0.037s |

# testapp003

## npm run synth


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp003 import 'source-map-support/register' | 0.000&pm;0.001s |
| ✨  Testapp003 import * as cdk from 'aws-cdk-lib' | 0.124&pm;0.018s |
| ✨  Testapp003Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp003Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp003Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.017&pm;0.004s |
| ✨  Testapp003Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.050&pm;0.010s |
| ✨  Testapp003Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.004&pm;0.001s |
| ✨  Testapp003Stack all import | 0.071&pm;0.014s |
| ✨  Testapp003 import { Testapp003Stack } from '../lib/testapp003-stack' | 0.092&pm;0.015s |
| ✨  Testapp003 all import | 0.218&pm;0.033s |
| ✨  Testapp001Stack ctor minus super() | 0.013&pm;0.001s |
| ✨  Testapp003 total processing time | 0.268&pm;0.035s |
| ✨  Testapp003 processing time no imports | 0.050&pm;0.003s |
| real | 2.783&pm;0.222s |
| user | 3.939&pm;0.134s |
| sys | 0.411&pm;0.040s |

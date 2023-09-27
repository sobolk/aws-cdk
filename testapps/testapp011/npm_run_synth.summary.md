# testapp011

## npm run synth


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp011 import 'source-map-support/register' | 0.001&pm;0.001s |
| ✨  Testapp011 import * as cdk from 'aws-cdk-lib' | 0.119&pm;0.014s |
| ✨  Testapp011Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp011Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp011Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.015&pm;0.002s |
| ✨  Testapp011Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.048&pm;0.007s |
| ✨  Testapp011Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.004&pm;0.001s |
| ✨  Testapp011Stack all import | 0.068&pm;0.010s |
| ✨  Testapp011 import { Testapp011Stack } from '../lib/testapp011-stack' | 0.089&pm;0.010s |
| ✨  Testapp011 all import | 0.209&pm;0.024s |
| ✨  Testapp001Stack ctor minus super() | 0.012&pm;0.001s |
| ✨  Testapp011 total processing time | 0.258&pm;0.026s |
| ✨  Testapp011 processing time no imports | 0.049&pm;0.002s |
| real | 2.698&pm;0.145s |
| user | 3.877&pm;0.045s |
| sys | 0.400&pm;0.032s |

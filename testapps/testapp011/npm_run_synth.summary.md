# testapp011

## npm run synth


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp011 import 'source-map-support/register' | 0.001&pm;0.000s |
| ✨  Testapp011 import * as cdk from 'aws-cdk-lib' | 0.118&pm;0.012s |
| ✨  Testapp011Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.001s |
| ✨  Testapp011Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp011Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.015&pm;0.002s |
| ✨  Testapp011Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.047&pm;0.006s |
| ✨  Testapp011Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.004&pm;0.001s |
| ✨  Testapp011Stack all import | 0.067&pm;0.009s |
| ✨  Testapp011 import { Testapp011Stack } from '../lib/testapp011-stack' | 0.087&pm;0.009s |
| ✨  Testapp011 all import | 0.207&pm;0.021s |
| ✨  Testapp001Stack ctor minus super() | 0.012&pm;0.000s |
| ✨  Testapp011 total processing time | 0.255&pm;0.022s |
| ✨  Testapp011 processing time no imports | 0.048&pm;0.001s |
| real | 2.730&pm;0.215s |
| user | 3.872&pm;0.027s |
| sys | 0.400&pm;0.032s |

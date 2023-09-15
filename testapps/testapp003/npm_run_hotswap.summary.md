# testapp003

## npm run hotswap


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp003 import 'source-map-support/register' | 0.001&pm;0.001s |
| ✨  Testapp003 import * as cdk from 'aws-cdk-lib' | 0.124&pm;0.013s |
| ✨  Testapp003Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp003Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp003Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.016&pm;0.001s |
| ✨  Testapp003Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.049&pm;0.005s |
| ✨  Testapp003Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.004&pm;0.002s |
| ✨  Testapp003Stack all import | 0.069&pm;0.007s |
| ✨  Testapp003 import { Testapp003Stack } from '../lib/testapp003-stack' | 0.090&pm;0.008s |
| ✨  Testapp003 all import | 0.216&pm;0.020s |
| ✨  Testapp001Stack ctor minus super() | 0.014&pm;0.002s |
| ✨  Testapp003 total processing time | 0.270&pm;0.026s |
| ✨  Testapp003 processing time no imports | 0.054&pm;0.007s |
| ✨  Synthesis time | 2.241&pm;0.120s |
| ✨  Deployment time | 0.447&pm;0.032s |
| ✨  Total time | 2.687&pm;0.129s |
| real | 4.699&pm;0.420s |
| user | 4.550&pm;0.141s |
| sys | 0.487&pm;0.040s |

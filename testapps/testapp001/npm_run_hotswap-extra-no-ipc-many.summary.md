# testapp001

## npm run hotswap-extra-no-ipc-many


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp001 import 'source-map-support/register' | 0.000&pm;0.000s |
| ✨  Testapp001 import * as cdk from 'aws-cdk-lib' | 0.172&pm;0.006s |
| ✨  Testapp001Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.035&pm;0.002s |
| ✨  Testapp001Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.105&pm;0.010s |
| ✨  Testapp001Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.007&pm;0.001s |
| ✨  Testapp001Stack all import | 0.148&pm;0.012s |
| ✨  Testapp001 import { Testapp001Stack } from '../lib/testapp001-stack' | 0.181&pm;0.013s |
| ✨  Testapp001 all import | 0.354&pm;0.017s |
| ✨  Testapp001Stack ctor minus super() | 0.037&pm;0.001s |
| ✨  Stage.synth() | 0.020&pm;0.006s |
| ✨  CDK_APP_HACK.synth() | 0.020&pm;0.006s |
| ✨  Synthesis time | 0.029&pm;0.009s |
| ✨  Deployment time | 2.316&pm;0.177s |
| ✨  Total time | 2.345&pm;0.177s |
| ✨  Testapp001 total processing time | 33.160&pm;1.191s |
| ✨  Testapp001 processing time no imports | 32.806&pm;1.183s |
| real | 39.950&pm;1.143s |
| user | 21.155&pm;0.840s |
| sys | 2.218&pm;0.078s |

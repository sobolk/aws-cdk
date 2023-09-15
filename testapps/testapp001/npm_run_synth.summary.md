# testapp001

## npm run synth


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp001 import 'source-map-support/register' | 0.001&pm;0.001 |
| ✨  Testapp001 import * as cdk from 'aws-cdk-lib' | 0.142&pm;0.018 |
| ✨  Testapp001Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000 |
| ✨  Testapp001Stack import { Construct } from 'constructs' | 0.000&pm;0.000 |
| ✨  Testapp001Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.029&pm;0.004 |
| ✨  Testapp001Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.081&pm;0.011 |
| ✨  Testapp001Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.005&pm;0.002 |
| ✨  Testapp001Stack all import | 0.115&pm;0.016 |
| ✨  Testapp001 import { Testapp001Stack } from '../lib/testapp001-stack' | 0.147&pm;0.017 |
| ✨  Testapp001 all import | 0.291&pm;0.035 |
| ✨  Testapp001Stack ctor minus super() | 0.012&pm;0.001 |
| ✨  Stage.synth() | 0.034&pm;0.002 |
| ✨  Testapp001 total processing time | 0.340&pm;0.036 |
| ✨  Testapp001 processing time no imports | 0.049&pm;0.003 |
| ✨  execProgram npx ts-node bin/testapp001.ts | 4.227&pm;0.150 |
| real | 4.815&pm;0.235 |
| user | 7.231&pm;0.060 |
| sys | 0.709&pm;0.044 |

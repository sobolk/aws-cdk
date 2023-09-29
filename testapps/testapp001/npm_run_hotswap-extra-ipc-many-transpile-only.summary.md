# testapp001

## npm run hotswap-extra-ipc-many-transpile-only


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp001 import 'source-map-support/register' | 0.000&pm;0.000s |
| ✨  Testapp001 import * as cdk from 'aws-cdk-lib' | 0.142&pm;0.006s |
| ✨  Testapp001Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.027&pm;0.002s |
| ✨  Testapp001Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.080&pm;0.006s |
| ✨  Testapp001Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.005&pm;0.001s |
| ✨  Testapp001Stack all import | 0.112&pm;0.008s |
| ✨  Testapp001 import { Testapp001Stack } from '../lib/testapp001-stack' | 0.132&pm;0.012s |
| ✨  Testapp001 all import | 0.276&pm;0.017s |
| ✨  Testapp001Stack ctor minus super() | 0.013&pm;0.001s |
| ✨  Stage.synth() | 0.034&pm;0.002s |
| ✨  Testapp001 total processing time | 0.326&pm;0.018s |
| ✨  Testapp001 processing time no imports | 0.050&pm;0.002s |
| ✨  execProgram npx ts-node bin/testapp001.ts | 4.387&pm;0.132s |
| ✨  Synthesis time | 1.146&pm;1.091s |
| ✨  Deployment time | 2.361&pm;0.228s |
| ✨  Total time | 3.506&pm;1.129s |
| ✨  execProgram npx ts-node --transpileOnly bin/testapp001.ts | 0.773&pm;0.017s |
| real | 53.192&pm;1.058s |
| user | 27.454&pm;0.130s |
| sys | 3.698&pm;0.054s |

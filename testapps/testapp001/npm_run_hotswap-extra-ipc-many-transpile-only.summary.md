# testapp001

## npm run hotswap-extra-ipc-many-transpile-only


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp001 import 'source-map-support/register' | 0.000&pm;0.000s |
| ✨  Testapp001 import * as cdk from 'aws-cdk-lib' | 0.143&pm;0.007s |
| ✨  Testapp001Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.027&pm;0.002s |
| ✨  Testapp001Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.080&pm;0.004s |
| ✨  Testapp001Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.005&pm;0.001s |
| ✨  Testapp001Stack all import | 0.112&pm;0.006s |
| ✨  Testapp001 import { Testapp001Stack } from '../lib/testapp001-stack' | 0.132&pm;0.009s |
| ✨  Testapp001 all import | 0.276&pm;0.015s |
| ✨  Testapp001Stack ctor minus super() | 0.013&pm;0.001s |
| ✨  Stage.synth() | 0.034&pm;0.002s |
| ✨  Testapp001 total processing time | 0.326&pm;0.016s |
| ✨  Testapp001 processing time no imports | 0.050&pm;0.002s |
| ✨  execProgram npx ts-node bin/testapp001.ts | 4.345&pm;0.057s |
| ✨  Synthesis time | 1.148&pm;1.075s |
| ✨  Deployment time | 0.233&pm;0.035s |
| ✨  Total time | 1.380&pm;1.079s |
| ✨  execProgram npx ts-node --transpileOnly bin/testapp001.ts | 0.780&pm;0.021s |
| real | 30.865&pm;0.614s |
| user | 23.913&pm;0.338s |
| sys | 3.393&pm;0.084s |

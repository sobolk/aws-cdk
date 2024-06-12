# testapp012

## npm run hotswap


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp012 import 'source-map-support/register' | 0.006&pm;0.001s |
| ✨  Testapp012 import * as cdk from 'aws-cdk-lib' | 0.127&pm;0.014s |
| ✨  Testapp012Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp012Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp012Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.016&pm;0.004s |
| ✨  Testapp012Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.053&pm;0.008s |
| ✨  Testapp012Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.004&pm;0.001s |
| ✨  Testapp012Stack all import | 0.073&pm;0.012s |
| ✨  Testapp012 import { Testapp012Stack } from '../lib/testapp012-stack' | 0.074&pm;0.012s |
| ✨  Testapp012 all import | 0.208&pm;0.027s |
| ✨  Testapp001Stack ctor minus super() | 0.014&pm;0.001s |
| ✨  Testapp012 total processing time | 0.257&pm;0.028s |
| ✨  Testapp012 processing time no imports | 0.049&pm;0.002s |
| ✨  Synthesis time | 2.274&pm;0.081s |
| ✨  Deployment time | 0.437&pm;0.022s |
| ✨  Total time | 2.713&pm;0.085s |
| real | 4.543&pm;0.125s |
| user | 4.615&pm;0.099s |
| sys | 0.489&pm;0.024s |

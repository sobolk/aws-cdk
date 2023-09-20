
# Setup

All changes made to the code can be reviewed in https://github.com/sobolk/aws-cdk/pull/1 .

## CDK packages

CDK packages has been changed to:
1. Measure execution time of synthesis closer to a place that uses CDK app.
2. Added ability to inject CDK app into CDK cli to eliminate IPC calls.

## Test apps

All test apps have same set of resources:
1. Three lambda functions
2. S3 Bucket
3. S3 Bucket deployment

All test apps has been instrumented to measure time of imports and actual logic execution.

### testapp001

1. Created with `cdk init app --language typescript`
2. Is linked through filesystem to CDK packages, i.e. `"aws-cdk-lib": "file:../../packages/aws-cdk-lib"` and `"aws-cdk": "file:../../packages/aws-cdk"`
3. The `--prefer-ts-exts` parameter has been removed from `app` in `cdk.json` to prevent `ts-node` from compiling linked CDK packages
4. Has the following scenarios:
   1. `testapp001.ts` - basic CDK app
   2. `testapp001.no-ipc.ts` - injects basic CDK app into programmatic CLI call to avoid IPC
   3. `testapp001.extra-ipc.ts` - simulates Amplify scenario, i.e. Amplify IPC-calling CDK cli, CDK cli IPC-calling basic CDK app.
   4. `testapp001.extra-no-ipc.ts` - simulates Amplify scenario, but with all IPC calls removed.
   5. `testapp001.extra-ipc-many-deployments.ts` - variation of `testapp002.extra-ipc.ts` that executes same scenario 10 times in a loop.
   6. `testapp001.extra-no-ipc-many-deployments.ts` - variation of `testapp001.extra-no-ipc.ts` that executes same scenario 10 times in a loop.

### testapp002

The `testapp002` is a copy of `testapp001` converted to Javascript.

1. Created with `cdk init app --language javascript`
2. Is linked through filesystem to CDK packages, i.e. `"aws-cdk-lib": "file:../../packages/aws-cdk-lib"` and `"aws-cdk": "file:../../packages/aws-cdk"`
3. Copied logic from `testapp001` converted to Javascript. It has exact same scenarios but in Javascript.

### testapp003

The `testapp003` is a sibling of `testapp001`. The purpose is to check if linking CDK packages via file system brings observable differences in experiments.

1. Created with `cdk init app --language typescript`
2. Dependencies left as is.
3. Has the following scenarios:
   1. `testapp003.ts` - basic CDK app

### testapp004

The `testapp004` is a copy of `testapp003` converted to Javascript. The purpose and scenarios are the same.

1. Created with `cdk init app --language javascript`
2. Dependencies left as is.
3. Copied logic from `testapp003` converted to Javascript. It has exact same scenarios but in Javascript.

### testapp005

The `testapp005` is a copy of `testapp003` adapted to use CDK V1. The purpose is to see if V1 that was not monolithic is faster.

### testapp006

The `testapp006` is a copy of `testapp004` adapted to use CDK V1. The purpose is to see if V1 that was not monolithic is faster.

# Experiment results

## Raw results

Raw results can be seen in `summary.md` as well as partial `.md` files scattered in `testapps` directory.
See https://github.com/sobolk/aws-cdk/blob/synth-experiments/testapps/summary.md .

## Insights

### Common stats

#### synth

| Measurement | testapp001 basic | testapp001 no IPC | testapp001 extra IPC | testapp001 extra no IPC | testapp002 basic | testapp002 no IPC | testapp002 extra IPC | testapp002 extra no IPC | testapp003 | testapp004 | testapp005 | testapp006 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Stack all imports | 0.122&pm;0.012s | 0.117&pm;0.004s | 0.111&pm;0.002s | 0.117&pm;0.004s |
| App all imports | 0.307&pm;0.026s | 0.286&pm;0.006s | 0.285&pm;0.002s | 0.284&pm;0.007s |
| Stage.synth() | 0.037&pm;0.003s | 0.031&pm;0.001s | 0.035&pm;0.002s | 0.033&pm;0.002s |
| Synth from CLI side | 4.449&pm;0.108s | 0.032&pm;0.001s | 4.260&pm;0.019s | 0.033&pm;0.002s |
| App total processing time | 0.362&pm;0.028s | 0.428&pm;0.008s | 0.335&pm;0.003s | 0.425&pm;0.012s |
| App processing time no imports | 0.055&pm;0.004s | 0.143&pm;0.005s | 0.050&pm;0.002s | 0.141&pm;0.005s |
| real | 5.088&pm;0.172s | 6.713&pm;0.098s | 5.454&pm;0.035s | 6.623&pm;0.123s |
| user | 7.453&pm;0.080s | 9.587&pm;0.123s | 8.577&pm;0.081s | 9.513&pm;0.128s |
| sys | 0.817&pm;0.018s | 1.138&pm;0.027s | 0.823&pm;0.015s | 1.127&pm;0.045s |

#### hotswap

| Measurement | testapp001 basic | testapp001 no IPC | testapp001 extra IPC | testapp001 extra no IPC | testapp002 basic | testapp002 no IPC | testapp002 extra IPC | testapp002 extra no IPC | testapp003 | testapp004 | testapp005 | testapp006 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 


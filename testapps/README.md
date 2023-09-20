
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

| Measurement                    | testapp001 basic | testapp001 no IPC | testapp001 extra IPC | testapp001 extra no IPC | testapp002 basic | testapp002 no IPC | testapp002 extra IPC | testapp002 extra no IPC | testapp003      | testapp004      | testapp005      | testapp006      |
|--------------------------------|------------------|-------------------|----------------------|-------------------------|------------------|-------------------|----------------------|-------------------------|-----------------|-----------------|-----------------|-----------------|
| Stack all imports              | 0.122&pm;0.012s  | 0.117&pm;0.004s   | 0.111&pm;0.002s      | 0.117&pm;0.004s         | 0.113&pm;0.003s  | 0.112&pm;0.003s   | 0.112&pm;0.003s      | 0.112&pm;0.003s         | 0.071&pm;0.014s | 0.076&pm;0.014s | 0.123&pm;0.021s | 0.117&pm;0.022s |
| App all imports                | 0.307&pm;0.026s  | 0.286&pm;0.006s   | 0.285&pm;0.002s      | 0.284&pm;0.007s         | 0.260&pm;0.005s  | 0.240&pm;0.005s   | 0.258&pm;0.007s      | 0.242&pm;0.008s         | 0.218&pm;0.033s | 0.208&pm;0.032s | 0.219&pm;0.036s | 0.197&pm;0.036s |
| Stage.synth()                  | 0.037&pm;0.003s  | 0.031&pm;0.001s   | 0.035&pm;0.002s      | 0.033&pm;0.002s         | 0.035&pm;0.001s  | 0.031&pm;0.001s   | 0.035&pm;0.001s      | 0.032&pm;0.001s         | N/A             | N/A             | N/A             | N/A             |
| Synth from CLI side            | 4.449&pm;0.108s  | 0.032&pm;0.001s   | 4.260&pm;0.019s      | 0.033&pm;0.002s         | 0.371&pm;0.010s  | 0.031&pm;0.001s   | 0.366&pm;0.010s      | 0.032&pm;0.001s         | N/A             | N/A             | N/A             | N/A             |
| App total processing time      | 0.362&pm;0.028s  | 0.428&pm;0.008s   | 0.335&pm;0.003s      | 0.425&pm;0.012s         | 0.311&pm;0.006s  | 0.372&pm;0.007s   | 0.308&pm;0.009s      | 0.378&pm;0.012s         | 0.268&pm;0.035s | 0.259&pm;0.034s | 0.315&pm;0.038s | 0.263&pm;0.039s |
| App processing time no imports | 0.055&pm;0.004s  | 0.143&pm;0.005s   | 0.050&pm;0.002s      | 0.141&pm;0.005s         | 0.051&pm;0.001s  | 0.132&pm;0.004s   | 0.050&pm;0.002s      | 0.136&pm;0.005s         | 0.050&pm;0.003s | 0.050&pm;0.002s | 0.097&pm;0.005s | 0.065&pm;0.003s |
| real                           | 5.088&pm;0.172s  | 6.713&pm;0.098s   | 5.454&pm;0.035s      | 6.623&pm;0.123s         | 0.968&pm;0.013s  | 0.891&pm;0.031s   | 0.996&pm;0.015s      | 0.892&pm;0.026s         | 2.783&pm;0.222s | 0.915&pm;0.045s | 5.306&pm;0.297s | 3.978&pm;0.071s |
| user                           | 7.453&pm;0.080s  | 9.587&pm;0.123s   | 8.577&pm;0.081s      | 9.513&pm;0.128s         | 0.955&pm;0.007s  | 0.906&pm;0.016s   | 0.975&pm;0.014s      | 0.903&pm;0.018s         | 3.939&pm;0.134s | 0.881&pm;0.026s | 6.000&pm;0.080s | 3.746&pm;0.047s |
| sys                            | 0.817&pm;0.018s  | 1.138&pm;0.027s   | 0.823&pm;0.015s      | 1.127&pm;0.045s         | 0.176&pm;0.005s  | 0.166&pm;0.010s   | 0.172&pm;0.004s      | 0.168&pm;0.009s         | 0.411&pm;0.040s | 0.131&pm;0.007s | 0.935&pm;0.099s | 0.711&pm;0.019s |

#### hotswap

| Measurement | testapp001 basic | testapp001 no IPC | testapp001 extra IPC | testapp001 extra no IPC | testapp002 basic | testapp002 no IPC | testapp002 extra IPC | testapp002 extra no IPC | testapp003 | testapp004 | testapp005 | testapp006 |
|-------------|------------------|-------------------|----------------------|-------------------------|------------------|-------------------|----------------------|-------------------------|------------|------------|------------|------------|
| 


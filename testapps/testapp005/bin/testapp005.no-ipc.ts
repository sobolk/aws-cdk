import { cli } from 'aws-cdk';
import { app } from './testapp005';

// This calls CLI with already loaded app, so that CLI->App.synth can happen without IPC.
// This also pretends to be a programmatic interface to CLI's deployment engine.
// In Amplify case we have Amplify CLI -> CDK CLI -> App.synth which involves process1->process2->process3
// Creating programmatic interface fro CDK CLI opens opportunity to remove 2 IPC calls and keep everything in single node process.
cli(process.argv.slice(2), app);

#!/bin/bash

cd testapp001
../run_benchmark.sh "npm run synth"
cd ..

cd testapp002
../run_benchmark.sh "npm run synth"
cd ..

cd testapp003
../run_benchmark.sh "npm run synth"
cd ..

cd testapp004
../run_benchmark.sh "npm run synth"
cd ..

cd testapp005
../run_benchmark.sh "npm run synth"
cd ..

cd testapp006
../run_benchmark.sh "npm run synth"
cd ..

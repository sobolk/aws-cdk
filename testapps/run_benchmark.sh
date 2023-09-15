#!/bin/bash

command_under_test=$1

log_file_name="${command_under_test// /_}.benchmark.log"
summary_file_name="${command_under_test// /_}.summary.md"

#rm $log_file_name
#rm $summary_file_name
#
#for run in {1..10}; do
#  eval "(time -p $command_under_test) >> $log_file_name 2>&1"
#done

this_script_dir=$(dirname "$0")
this_dir="$(basename $(pwd))"
$this_script_dir/calculate_summary.py $log_file_name $summary_file_name "$command_under_test" "$this_dir"

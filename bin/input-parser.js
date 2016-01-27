#! /usr/bin/env node

const flag = process.argv[process.argv.length - 2];
const flags = {"-c": "component", "-t": "test" };

const flagged = flag === '-c' || flag === '-t' ? flags[flag] : false;

flagged ? console.log("Only create " + flagged) : console.log("Create both component and test");
console.log(process.argv[process.argv.length - 1]);



console.log("console.log output");
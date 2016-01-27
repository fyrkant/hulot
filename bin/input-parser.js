#! /usr/bin/env node
const parserFunc = require('./parser-func');
const flags = {"-c": "component", "-t": "test" };

const flag = process.argv[process.argv.length - 2];
const fileName = process.argv[process.argv.length - 1];
const option = flag === '-c' || flag === '-t' ? flags[flag] : false;

parserFunc(fileName, option);
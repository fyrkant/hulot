#! /usr/bin/env node
const inputParser = require('./input-parser');
const componentGenerator = require('./component-generator');
const testGenerator = require('./test-generator');
const fileSaver = require('./file-saver');
const controller = require('./controller');

// const conf = require('./package');

// console.log(require(process.env.PWD + '/package')['hulot']);

controller(process.argv, {inputParser, componentGenerator, testGenerator, fileSaver});

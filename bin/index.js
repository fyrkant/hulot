#! /usr/bin/env node
const inputParser = require('./input-parser');
const componentGenerator = require('./component-generator');
const testGenerator = require('./test-generator');
const fileSaver = require('./file-saver');

try {
    const input = inputParser(process.argv.slice(2));

    if (input.helpText) {
        console.log(input.helpText);
    } else if (input.option) {
        const toSave = input.option === 'component' ?
            componentGenerator(input.fileName) :
            testGenerator(input.fileName);

        fileSaver(toSave);
    } else {
        fileSaver(componentGenerator(input.fileName));
        fileSaver(testGenerator(input.fileName));
    }
} catch (err) {
    console.log('Oh crap! ' + err);
}
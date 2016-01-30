const helpText = `
COMPOTEST - Get testing or get out!

Usage:
 $ compotest <cool-component>
    => Generates a component called CoolComponent and a matching test file.
 $ compotest -c <cool-component>
    => Generates component only, no test. (Why aren't you testing?!)
 $ compotest -t <cool-component>
    => Generates test only, no component. (Yep, get testing!)

`;
const validPropTypes = [
    'array',
    'bool',
    'func',
    'number',
    'object',
    'string',
    'node',
    'element'
];

module.exports = {
    helpText,
    validPropTypes
};

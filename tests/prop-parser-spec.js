const expect = require('expect');

const propFinder = require('../bin/prop-parser.js');

describe('Prop finder function', () => {
  it('should return a prop object', () => {
    const actual = propFinder('propname:bool');
    const expected = {
      name: 'propname',
      type: 'bool',
      isRequired: false
    };

    expect(actual).toEqual(expected);
  });

  it('should return correct prop object', () => {
    const actual = propFinder('someName:bool:req');
    const expected = {
      name: 'someName',
      type: 'bool',
      isRequired: true
    };

    expect(actual).toEqual(expected);
  });
});
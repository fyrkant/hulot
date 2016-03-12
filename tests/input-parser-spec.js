const expect = require('expect');

const inputParser = require('../bin/input-parser');
const helpText = require('../bin/string-collection').helpText;

describe('input parser function', () => {

  it('returns helptext if passed empty array', () => {
    const actual = inputParser([]);
    const expected = {helpText};

    expect(actual).toEqual(expected);
  });

  it('returns helptext if passed --help', () => {
    const actual = inputParser(['--help']);
    const expected = {helpText};

    expect(actual).toEqual(expected);
  });

  it('--help returns helptext no matter other input', () => {
    const actual = inputParser(['--help', 'something-else']);
    const actual2 = inputParser(['--help', 'something-else']);
    const actual3 = inputParser(['something-else','something-more', '--help']);
    const actual4 = inputParser(['something-else','something-more', '--help', 'one-mote-thing', 'blabla-bla']);
    const expected = {helpText};

    expect(actual).toEqual(expected);
    expect(actual2).toEqual(expected);
    expect(actual3).toEqual(expected);
    expect(actual4).toEqual(expected);
  });

  it('returns an object with correst fileName property and option: false if no flag is sent', () => {
    const fileName = 'test-compname';
    const actual = inputParser([fileName]);
    const expected = {
      fileName,
      option: false
    };

    expect(actual).toEqual(expected);
  });

  it('sets option to component if -c flag is set', () => {
    const fileName = 'test-compname';
    const actual = inputParser([fileName, '-c']);
    const expected = {
      fileName,
      option: 'component'
    };

    expect(actual).toEqual(expected);
  });

  it('sets option to test if -t flag is set', () => {
    const fileName = 'test-compname';
    const actual = inputParser([fileName, '-t']);
    const expected = {
      fileName,
      option: 'test'
    };

    expect(actual).toEqual(expected);
  });

  it('order of file name and flag is not important', () => {
    const fileName = 'test-compname';
    const actual = inputParser(['-t', fileName]);
    const expected = {
      fileName,
      option: 'test'
    };

    expect(actual).toEqual(expected);
  });

  it('it returns required props', () => {
    const fileName = 'test-component';
    const actual = inputParser([fileName, 'myProp:bool:req']);
    const expected = {
      fileName,
      option: false,
      props: [
        {
          name: 'myProp',
          type: 'bool',
          isRequired: true
        }
      ]
    };

    expect(actual).toEqual(expected);
  });

  it('it returns optional props', () => {
    const fileName = 'test-component';
    const actual = inputParser([fileName, 'myProp:bool']);
    const expected = {
      fileName,
      option: false,
      props: [
        {
          name: 'myProp',
          type: 'bool',
          isRequired: false
        }
      ]
    };

    expect(actual).toEqual(expected);
  });

  it('returns more than one prop if more than one entered', () => {
    const fileName = 'my-testing-component';
    const actual = inputParser([
      fileName,
      'myRequiredFunc:func:req',
      'myOptionalBool:bool',
      'myRequiredNumber:number:req',
      'myOptionalArray:array']);
    const expected = {
      fileName,
      option: false,
      props: [
        {
          name: 'myRequiredFunc',
          type: 'func',
          isRequired: true
        },
        {
          name: 'myOptionalBool',
          type: 'bool',
          isRequired: false
        },
        {
          name: 'myRequiredNumber',
          type: 'number',
          isRequired: true
        },
        {
          name: 'myOptionalArray',
          type: 'array',
          isRequired: false
        }
      ]
    };

    expect(actual).toEqual(expected);
  });
  it('returns correct props even if -t flag is set', () => {
    const fileName = 'my-testing-component';
    const actual = inputParser([
      fileName,
      '-t',
      'myRequiredFunc:func:req',
      'myOptionalBool:bool',
      'myRequiredNumber:number:req',
      'myOptionalArray:array']);
    const expected = {
      fileName,
      option: 'test',
      props: [
        {
          name: 'myRequiredFunc',
          type: 'func',
          isRequired: true
        },
        {
          name: 'myOptionalBool',
          type: 'bool',
          isRequired: false
        },
        {
          name: 'myRequiredNumber',
          type: 'number',
          isRequired: true
        },
        {
          name: 'myOptionalArray',
          type: 'array',
          isRequired: false
        }
      ]
    };

    expect(actual).toEqual(expected);
  });
  it('returns correct props even if -c flag is set', () => {
    const fileName = 'my-testing-component';
    const actual = inputParser([
      fileName,
      '-c',
      'myRequiredFunc:func:req',
      'myOptionalBool:bool',
      'myRequiredNumber:number:req',
      'myOptionalArray:array']);
    const expected = {
      fileName,
      option: 'component',
      props: [
        {
          name: 'myRequiredFunc',
          type: 'func',
          isRequired: true
        },
        {
          name: 'myOptionalBool',
          type: 'bool',
          isRequired: false
        },
        {
          name: 'myRequiredNumber',
          type: 'number',
          isRequired: true
        },
        {
          name: 'myOptionalArray',
          type: 'array',
          isRequired: false
        }
      ]
    };

    expect(actual).toEqual(expected);
  });
});

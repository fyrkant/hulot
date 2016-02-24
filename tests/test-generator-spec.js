const expect = require('expect');

const testGenerator = require('../bin/test-generator');

describe('test generator function', () => {

  it('returns an object with properties including the correct filepath, template and type', () => {
    const fileName = 'my-testing-component.js';
    const actual = testGenerator(fileName);
    const expected = {
      filePath: 'spec/components/my-testing-component-spec.js',
      template: `import React from 'react';

import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';

expect.extend(expectJSX);

import MyTestingComponent from '../../src/components/my-testing-component';

describe('MyTestingComponent', () => {
  it('new component is amazing', () => {
    const renderer = TestUtils.createRenderer();

    renderer.render(<MyTestingComponent /* ADD PROPS HERE */ />);

    const actual = renderer.getRenderOutput();
    const expected = <h1>Wow, this is amazing!</h1>;

    expect(actual).toIncludeJSX(expected);
  });
});`,
      type: 'Test'
    };

    expect(actual).toEqual(expected);
  });

  it('should return same output even if filename has .js or not', () => {
    const fileName = 'my-testing-component';
    const actual = testGenerator(fileName);
    const expected = {
      filePath: 'spec/components/my-testing-component-spec.js',
      template: `import React from 'react';

import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';

expect.extend(expectJSX);

import MyTestingComponent from '../../src/components/my-testing-component';

describe('MyTestingComponent', () => {
  it('new component is amazing', () => {
    const renderer = TestUtils.createRenderer();

    renderer.render(<MyTestingComponent /* ADD PROPS HERE */ />);

    const actual = renderer.getRenderOutput();
    const expected = <h1>Wow, this is amazing!</h1>;

    expect(actual).toIncludeJSX(expected);
  });
});`,
      type: 'Test'
    };

    expect(actual).toEqual(expected);
  });

  it('should set testfolder from settings', () => {
    const fileName = 'my-testing-component';
    const settings = {components: 'cool/folder/', tests: 'someplace/else/'};
    const actual = testGenerator(fileName, settings);
    const expected = {
      filePath: 'someplace/else/my-testing-component-spec.js',
      template: `import React from 'react';

import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';

expect.extend(expectJSX);

import MyTestingComponent from '../../cool/folder/my-testing-component';

describe('MyTestingComponent', () => {
  it('new component is amazing', () => {
    const renderer = TestUtils.createRenderer();

    renderer.render(<MyTestingComponent /* ADD PROPS HERE */ />);

    const actual = renderer.getRenderOutput();
    const expected = <h1>Wow, this is amazing!</h1>;

    expect(actual).toIncludeJSX(expected);
  });
});`,
      type: 'Test'
    };

    expect(actual).toEqual(expected);
  });
});
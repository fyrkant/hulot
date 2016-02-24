const helpText = `
HULOT - Get testing or get out!

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

const componentTemplate = `import React, {Component} from 'react';

export default class ::componentName:: extends Component {
  render() {
    return (
      <div>
        <h1>Change this to whatever, the sky is the limit!</h1>
      </div>
    );
  }
}::propTypes::`;

const testTemplate = `import React from 'react';

import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';

expect.extend(expectJSX);

import ::TestComponentName:: from '::testComponentFilePath::';

describe('::TestComponentName::', () => {
  it('new component is amazing', () => {
    const renderer = TestUtils.createRenderer();

    renderer.render(<::TestComponentName:: /* ADD PROPS HERE */ />);

    const actual = renderer.getRenderOutput();
    const expected = <h1>Wow, this is amazing!</h1>;

    expect(actual).toIncludeJSX(expected);
  });
});`;

module.exports = {
    helpText,
    componentTemplate,
    testTemplate,
    validPropTypes
};

module.exports = (fileName) => {
    const fileNameArray = fileName.split('.');
    const componentFilePath = `../../src/components/${fileNameArray[0]}`;
    const filePath = `spec/components/${fileNameArray[0]}-spec.${(fileNameArray[1] || 'js')}`;
    const testComponentName = fileNameArray[0]
        .split('-')
        .map(x => x.charAt(0).toUpperCase() + x.slice(1))
        .join('');

    const template = `import React from 'react';

import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';

expect.extend(expectJSX);

import ${testComponentName} from '${componentFilePath}';

describe('${testComponentName}', () => {

    it('new component is amazing', () => {
        const renderer = TestUtils.createRenderer();

        renderer.render(<${testComponentName} /* ADD PROPS HERE */ />);

        const actual = renderer.getRenderOutput();
        const expected = <h1>Wow, this is amazing!</h1>;

        expect(actual).toIncludeJSX(expected);
    });
});`;

    return {filePath, template, type: 'Test'};

};

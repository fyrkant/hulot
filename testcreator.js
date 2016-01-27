'use strict';

module.exports = (input) => {
    const fs = require('fs');
    const exec = require('child_process').exec;

    const filePath = process.argv[process.argv.length - 1];
    const fileName = filePath.split('/').pop();
    const fileNameArray = fileName.split('.');
    const testFilePath = `spec/components/${fileNameArray[0]}-spec.${fileNameArray[1]}`;
    const componentName = fileNameArray[0]
        .split('-')
        .map(x => x.charAt(0).toUpperCase() + x.slice(1))
        .join('');

    const emptyFile = `import React from 'react';
    import TestUtils from 'react-addons-test-utils';
    import expect from 'expect';
    import expectJSX from 'expect-jsx';

    expect.extend(expectJSX);

    import ${componentName} from '../../${filePath}';

    describe('${componentName}', () => {

        it('WRITE DESCRIPTION HERE', () => {
            const renderer = TestUtils.createRenderer();

            renderer.render(<${componentName} ADD PROPS HERE />);

            const actual = renderer.getRenderOutput();
            const expected = <p>This is what you want</p>;

            expect(actual).toIncludeJSX(expected);
        });
    });`;

    fs.writeFile(testFilePath, emptyFile, {encoding: 'utf8', flag: 'wx'},
        error => error ?
            console.log('Oh crap! ' + error.message) :
            console.log('Test file succesfully created!')
        );
}

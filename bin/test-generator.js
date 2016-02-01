const testTemplate = require('./string-collection').testTemplate;

module.exports = (fileName) => {
    const fileNameArray = fileName.split('.');
    const componentFilePath = `../../src/components/${fileNameArray[0]}`;
    const filePath = `spec/components/${fileNameArray[0]}-spec.${(fileNameArray[1] || 'js')}`;
    const testComponentName = fileNameArray[0]
        .split('-')
        .map(x => x.charAt(0).toUpperCase() + x.slice(1))
        .join('');
    const template = testTemplate
                        .replace(/::TestComponentName::/g, testComponentName)
                        .replace(/::testComponentFilePath::/g, componentFilePath);

    return {filePath, template, type: 'Test'};

};

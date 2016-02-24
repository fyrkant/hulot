const testTemplate = require('./string-collection').testTemplate;

module.exports = (fileName, settings) => {
    const fileNameArray = fileName.split('.');
    const componentFolder = settings ? settings.components : 'src/components/';
    const componentFilePath = `../../${componentFolder}${fileNameArray[0]}`;
    const testFolder = settings ? settings.tests : 'spec/components/';
    const filePath = `${testFolder}${fileNameArray[0]}-spec.${(fileNameArray[1] || 'js')}`;
    const testComponentName = fileNameArray[0]
        .split('-')
        .map(x => x.charAt(0).toUpperCase() + x.slice(1))
        .join('');
    const template = testTemplate
                        .replace(/::TestComponentName::/g, testComponentName)
                        .replace(/::testComponentFilePath::/g, componentFilePath);

    return {filePath, template, type: 'Test'};

};

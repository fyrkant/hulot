const componentTemplate = require('./string-collection').componentTemplate;
const propTypesGenerator = require('./prop-types-generator');

module.exports = (fileName, props) => {
    const fileNameArray = fileName.split('.');
    const filePath = `src/components/${fileNameArray[0]}.${(fileNameArray[1] || 'js')}`;
    const componentName = fileNameArray[0]
        .split('-')
        .map(x => x.charAt(0).toUpperCase() + x.slice(1))
        .join('');
    const template = componentTemplate
                        .replace(/::componentName::/, componentName)
                        .replace(/::propTypes::/, props ? propTypesGenerator(componentName, props) : '');
    
    return {filePath, template, type: 'Component'};    
};

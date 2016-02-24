const componentTemplate = require('./string-collection').componentTemplate;
const propTypesGenerator = require('./prop-types-generator');

module.exports = (fileName, props, settings) => {
  const fileNameArray = fileName.split('.');
  const componentFolder = settings ? settings.components : 'src/components/';
  const filePath = `${componentFolder}${fileNameArray[0]}.${(fileNameArray[1] || 'js')}`;
  const componentName = fileNameArray[0]
        .split('-')
        .map(x => x.charAt(0).toUpperCase() + x.slice(1))
        .join('');
  const template = componentTemplate
                        .replace(/::componentName::/, componentName)
                        .replace(/::propTypes::/, props ? propTypesGenerator(componentName, props) : '');

  return {filePath, template, type: 'Component'};
};

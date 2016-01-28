module.exports = (fileName) => {
    const fileNameArray = fileName.split('.');
    const filePath = `src/components/${fileNameArray[0]}.${(fileNameArray[1] || 'js')}`;
    const componentName = fileNameArray[0]
        .split('-')
        .map(x => x.charAt(0).toUpperCase() + x.slice(1))
        .join('');

    const template = `import React, {Component} from 'react';

export default class ${componentName} extends Component {
    render() {
        return (
            <div>
                <h1>Change this to whatever, the sky is the limit!</h1>
            </div>
        );
    }
}`;
    
    return {filePath, template, type: 'Component'};    
};

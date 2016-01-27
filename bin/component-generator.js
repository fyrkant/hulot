const fs = require('fs');

module.exports = (fileName) => {
    const fileNameArray = fileName.split('.');
    const filePath = `src/components/${fileNameArray[0]}.${(fileNameArray[1] || 'js')}`;
    const componentName = fileNameArray[0]
        .split('-')
        .map(x => x.charAt(0).toUpperCase() + x.slice(1))
        .join('');

    const emptyFile = `import React, {Component} from 'react';

export default class ${componentName} extends Component {
    render() {
        return (
            <div>
                <h1>Change this to whatever, the sky is the limit!</h1>
            </div>
        );
    }
}`;
    // console.log(emptyFile);

    fs.writeFile(filePath, emptyFile, {encoding: 'utf8', flag: 'wx'},
        error => error ?
            console.log('Oh crap! ' + error.message) :
            console.log('Test file succesfully created!')
        );
};

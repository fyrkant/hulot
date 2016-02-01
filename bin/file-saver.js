const fs = require('fs');

module.exports = (options) => {
    fs.writeFile(options.filePath, options.template, {encoding: 'utf8', flag: 'wx'},
        error => console.log(
            error ?
            `Oh crap! ${error.message}` :
            `${options.type} file succesfully created!`)
    );
};
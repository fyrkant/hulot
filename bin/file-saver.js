const fs = require('fs');

module.exports = (options) => {

    fs.writeFile(options.filePath, options.template, {encoding: 'utf8', flag: 'wx'},
        error => error ?
            console.log(`Oh crap! ${error.message}`) :
            console.log(`${options.type} file succesfully created!`)
        );
};
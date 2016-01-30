const propTypeValidator = require('./prop-type-validator.js');

module.exports = string => {
    const stringSplat = string.split(':');
    const name = stringSplat[0];
    const type = propTypeValidator(stringSplat[1]);
    const isRequired = stringSplat[2] === 'req' ? true : false;
    
    return {name, type, isRequired};
};
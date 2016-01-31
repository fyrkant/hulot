const validPropTypes = require('./string-collection').validPropTypes;
module.exports = typeString => {
    const type = validPropTypes.filter(t => t === typeString)[0];

    if (!type) {
        throw new Error(`${typeString} is an invalid proptype!`);
    } else {
        return type;
    }
};

// https://facebook.github.io/react/docs/reusable-components.html#prop-validation
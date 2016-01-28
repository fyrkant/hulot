const flags = {'-c': 'component', '-t': 'test' };
const helpText = require('./string-collection').helpText;

module.exports = (inputArray) => {
    if (inputArray.length == 0 || inputArray.indexOf('--help') !== -1) {
        return {helpText};
    } else {
        const flag = inputArray.filter(f => f === '-c' || f === '-t')[0];
        const fileName = inputArray.filter(s => s.substr(0, 1) !== '-')[0];
        const option = flag === '-c' || flag === '-t' ? flags[flag] : false;

        return {
            fileName, option
        };   
    }
};


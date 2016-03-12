const flags = {'-c': 'component', '-t': 'test' };
const helpText = require('./string-collection').helpText;
const propParser = require('./prop-parser');

module.exports = (inputArray) => {
  if (inputArray.length == 0 || inputArray.indexOf('--help') !== -1) {
    return {helpText};
  } else {
    const flag = inputArray.filter(f => f === '-c' || f === '-t')[0];
    const fileName = inputArray.filter(s => s.substr(0, 1) !== '-' && !s.includes(':'))[0];
    const props = inputArray.filter(x => x.includes(':'))
          .map(propParser);
    const option = flag === '-c' || flag === '-t' ? flags[flag] : false;

    if (!fileName) {
      throw new Error('No valid file name entered.');
    }

    if (props.length === 0) {
      return {fileName, option};
    } else {
      return {fileName, option, props};
    }
  }
};


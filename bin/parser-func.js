const componentGenerator = require('./component-generator');
const testGenerator = require('./test-generator');
const parserFunc = (fileName, option) => {
    if (option) {
        switch(option) {
        case 'component':
            componentGenerator(fileName);
            break;
        case 'test':
            testGenerator(fileName);
            break;
        default: break;
        }
    } else {
        componentGenerator(fileName);
        testGenerator(fileName);
    }    
};

module.exports = parserFunc;   
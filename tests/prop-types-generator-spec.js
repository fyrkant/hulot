const expect = require('expect');

const propTypesGenerator = require('../bin/prop-types-generator.js');

describe('prop types generator function', () => {
    it('is a function', () => {
        expect(propTypesGenerator).toBeA('function');
    });
    it('should take return correct proptypes string if passed component name and props array', () => {
        const componentName = 'MyTestingComponent';
        const props = [{name: 'myTestingFuncProp', type: 'func', isRequired: false}];
        const actual = propTypesGenerator(componentName, props);
        const expected = `
MyTestingComponent.propTypes = {
    myTestingFuncProp: React.PropTypes.func
};`;
        
        expect(actual).toEqual(expected);
    });
    it('should correctly handle more than one prop', () => {
        const componentName = 'MyTestingComponent';
        const props = [
            {name: 'myTestingFuncProp', type: 'func', isRequired: false},
            {name: 'myTestingRequiredBoolProp', type: 'bool', isRequired: true}];
        const actual = propTypesGenerator(componentName, props);
        const expected = `
MyTestingComponent.propTypes = {
    myTestingFuncProp: React.PropTypes.func,
    myTestingRequiredBoolProp: React.PropTypes.bool.isRequired
};`;
        
        expect(actual).toEqual(expected);
    });

});
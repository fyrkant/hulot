const expect = require('expect');

const propValidator = require('../bin/prop-type-validator.js');
const validPropTypes = require('../bin/string-collection').validPropTypes;

describe('prop validator function', () => {
    it('is a function', () => {
        expect(propValidator).toBeA('function');
    });

    it('does not throw an erro with any valid type', () => {
        validPropTypes.map(type => 
            expect(propValidator)
                .withArgs(type)
                .toNotThrow()
        );
    });

    it('throws error when passed invalid proptype', () => {
        expect(propValidator)
            .withArgs('poop')
            .toThrow(/is an invalid proptype/);
    });
});
const expect = require('expect');
const spyOn = expect.spyOn;

const inputParser = require('../bin/input-parser');
const controller = require('../bin/controller');
const helpText = require('../bin/string-collection').helpText;

describe('controller', () => {
    const stubFuncs = {
        componentGenerator() {},
        testGenerator() {},
        fileSaver() {},
        inputParser
    };
    afterEach(() => {
        expect.restoreSpies();
    });
    it('is a function', () => {
        expect(controller).toBeA('function');
    });

    it('should slice off the two first elements from the process.argv-array and pass the rest to inputParser', () => {
        const spy = spyOn(stubFuncs, 'inputParser').andCallThrough();
        controller(['one','two','three'], stubFuncs);
        expect(spy).toHaveBeenCalledWith(['three']);
    });

    it('should show help text if helptext field is set on inputParser return object', () => {
        const spy = spyOn(console, 'log');
        controller(['one','two'], stubFuncs);
        expect(spy.calls[0].arguments).toEqual([helpText]);
    });

    it('should only call componentGenerator if passed -c', () => {
        const spy = spyOn(stubFuncs, 'componentGenerator');
        const spy2 = spyOn(stubFuncs, 'testGenerator');
        controller(['XX','XX','component-name', '-c'], stubFuncs);

        expect(spy).toHaveBeenCalled();
        expect(spy2).toNotHaveBeenCalled();
    });

    it('should only call testGenerator if passed -t', () => {
        const spy = spyOn(stubFuncs, 'componentGenerator');
        const spy2 = spyOn(stubFuncs, 'testGenerator');
        controller(['XX','XX','component-name', '-t'], stubFuncs);

        expect(spy).toNotHaveBeenCalled();
        expect(spy2).toHaveBeenCalled();
    });

    it('should call both generators if no flag passed in', () => {
        const spy = spyOn(stubFuncs, 'componentGenerator');
        const spy2 = spyOn(stubFuncs, 'testGenerator');
        controller(['XX','XX','component-name'], stubFuncs);

        expect(spy).toHaveBeenCalled();
        expect(spy2).toHaveBeenCalled();
    });
});
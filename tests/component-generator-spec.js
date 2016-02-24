const expect = require('expect');

const componentGenerator = require('../bin/component-generator');

describe('component generator function', () => {

    it('should return an object with properties including the correct filepath, template and type', () => {
        const fileName = 'my-testing-component.js';
        const actual = componentGenerator(fileName);
        const expected = {
            filePath: 'src/components/my-testing-component.js',
            template: `import React, {Component} from 'react';

export default class MyTestingComponent extends Component {
    render() {
        return (
            <div>
                <h1>Change this to whatever, the sky is the limit!</h1>
            </div>
        );
    }
}`,
            type: 'Component'
        };

        expect(actual).toEqual(expected);
    });

    it('should set componentfolder from settings', () => {
        const fileName = 'my-testing-component.js';
        const settings = {components: 'awesome/folder/', tests: 'testy/folder/'};
        const actual = componentGenerator(fileName, null, settings);
        const expected = {
            filePath: 'awesome/folder/my-testing-component.js',
            template: `import React, {Component} from 'react';

export default class MyTestingComponent extends Component {
    render() {
        return (
            <div>
                <h1>Change this to whatever, the sky is the limit!</h1>
            </div>
        );
    }
}`,
            type: 'Component'
        };

        expect(actual).toEqual(expected);
    });

    it('should return the same value even if the provided filename has .js or not', () => {
        const fileName = 'my-testing-component';
        const actual = componentGenerator(fileName);
        const expected = {
            filePath: 'src/components/my-testing-component.js',
            template: `import React, {Component} from 'react';

export default class MyTestingComponent extends Component {
    render() {
        return (
            <div>
                <h1>Change this to whatever, the sky is the limit!</h1>
            </div>
        );
    }
}`,
            type: 'Component'
        };

        expect(actual).toEqual(expected);
    });

    it('should generate props is props object passed in as second argument', () => {
        const fileName = 'my-testing-component';
        const props = [{name: 'myTestingFuncProp', type: 'func', isRequired: false}];
        const actual = componentGenerator(fileName, props);
        const expected = {
            filePath: 'src/components/my-testing-component.js',
            template: `import React, {Component} from 'react';

export default class MyTestingComponent extends Component {
    render() {
        return (
            <div>
                <h1>Change this to whatever, the sky is the limit!</h1>
            </div>
        );
    }
}
MyTestingComponent.propTypes = {
    myTestingFuncProp: React.PropTypes.func
};`,
            type: 'Component'
        };

        expect(actual).toEqual(expected);
    });
});
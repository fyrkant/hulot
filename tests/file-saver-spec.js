const expect = require('expect');
const fs = require('fs');
const mock = require('mock-fs');

const fileSaver = require('../bin/file-saver');

describe('file saver function', () => {
  beforeEach(() => {
    mock({
      'src/components': {'existing-component.js': 'content'},
      'spec/components': {'existing-component-spec.js': 'content'}
    });
  });
  afterEach(() => {
    mock.restore();
    expect.restoreSpies();
  });

  it('should be a function', () => {
    expect(fileSaver).toBeA('function');
  });

  it('should call fs.writeFile', () => {
    const spy = expect.spyOn(fs, 'writeFile');
    const options = {filePath: 'my/faulty/path', template: 'template mock', type: 'Component'};

    fileSaver(options);
    expect(spy).toHaveBeenCalled();
  });

  it.skip('should log correct message to console after save', () => {
    const options = {
      filePath: 'src/components/existing-component.js',
      template: 'template mock',
      type: 'Component'
    };
  });

  mock.restore();
});
module.exports = (processArgs, f, settings) => {
  try {
      const input = f.inputParser(processArgs.slice(2));

      if (input.helpText) {
          console.log(input.helpText);
        } else if (input.option) {
          const toSave = input.option === 'component' ?
                f.componentGenerator(input.fileName, input.props, settings) :
                f.testGenerator(input.fileName, settings);

          f.fileSaver(toSave);
        } else {
          f.fileSaver(f.componentGenerator(input.fileName, input.props));
          f.fileSaver(f.testGenerator(input.fileName));
        }
    } catch (err) {
      console.log('Oh crap! ' + err);
    }
};
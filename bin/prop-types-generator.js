module.exports = (componentName, propsArray) => {
    const mappedProps = propsArray
        .map(p => `${p.name}: React.PropTypes.${p.type}${p.isRequired ? '.isRequired' : ''}`)
        .join(',\n    ');

    return `
${componentName}.propTypes = {
    ${mappedProps}
};`;
};
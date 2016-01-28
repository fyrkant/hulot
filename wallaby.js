module.exports = function (wallaby) {
    return {
        files: [
            'bin/*.js'
        ],
        tests: [
            'tests/*-spec.js'
        ],
        env: {
            type: 'node',
            params: {
                runner: '--harmony --harmony_arrow_functions',
                env: 'PARAM1=true;PARAM2=false'
            }
        }
    };
};
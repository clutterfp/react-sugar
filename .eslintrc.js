module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true
    },
    extends: 'airbnb-base',
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2018
    },
    rules: {
        indent: ['error', 4],
        'comma-dangle': 'off',
        'implicit-arrow-linebreak': 'off',
        'operator-linebreak': 'off',
        'func-names': 'off',
        'space-before-function-paren': 'off'
    }
};

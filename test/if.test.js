const babel = require('@babel/core');
const plugin = require('../src');

const example = `
<div r-if={true}></div>
`;

it('works', () => {
    const { code } = babel.transform(example, {
        plugins: ['@babel/plugin-syntax-jsx', plugin]
    });
    expect(code).toMatchSnapshot();
});

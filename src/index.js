const transformIf = require('./if');

module.exports = function sugarPlugin(babel) {
    const handlers = {
        'r-if': transformIf(babel)
    };

    const visitor = {
        JSXElement(path) {
            const {
                node,
                node: { openingElement }
            } = path;
            const { attributes } = openingElement;
            const attribute = attributes.find(
                ({ type, name }) =>
                    type === 'JSXAttribute' &&
                    Object.keys(handlers).includes(name.name)
            );

            if (attribute === undefined) {
                return;
            }

            const handler = handlers[attribute.name.name];
            path.replaceWith(handler(node, attribute));
        }
    };

    return {
        visitor
    };
};

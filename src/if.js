module.exports = function transformIf(babel) {
    const { types: t } = babel;

    return function(node, attr) {
        const {
            openingElement: { name, attributes }
        } = node;

        const jsxOpeningElement = t.JSXOpeningElement(
            name,
            attributes.filter(attribute => attribute !== attr)
        );

        const jsxElement = t.JSXElement(
            jsxOpeningElement,
            node.closingElement,
            node.children
        );

        const expression = t.conditionalExpression(
            attr.value.expression,
            jsxElement,
            t.nullLiteral()
        );

        return expression;
    };
};

module.exports = (babel) => {
    return {
        visitor: {
            ExpressionStatement(path) {
                const expressionCallee = path.node.expression.callee;

                if (expressionCallee &&
                    expressionCallee.object &&
                    expressionCallee.object.name === 'console' &&
                    expressionCallee.property.name === 'log' ) {
                    
                    path.remove();
                }
            }
        }
    };
};
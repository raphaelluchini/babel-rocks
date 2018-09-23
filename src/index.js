import 'better-log/install';

export default function ({ types: t }) {
	function updateExpression(node, side) {
		if (t.isBinaryExpression(node)) {
			if (t.isIdentifier(node[side])) {
				return t.identifier(node[side].name);
			}
			return t.stringLiteral(node[side].value);
		}
		return t.stringLiteral();
	}
	function isString(element) {
		return t.isStringLiteral(element) || t.isTemplateLiteral(element);
	}
	return {
		visitor: {
			CallExpression(path, options) {
				const message = options.opts.message || 'Babel rocks'
				const callee = path.get("callee");
				const argument = path.node.arguments[0];
				const consoleExpression = callee.matchesPattern('console', true);
				const consoleExpressionBind = callee.get("property").isIdentifier({ name: "bind" });

				if (consoleExpression && argument) {

					if (t.isBinaryExpression(argument)) {
						const binary = t.binaryExpression("+",
							t.binaryExpression("+",
								t.stringLiteral(message),
								updateExpression(argument, 'left')
							),
							updateExpression(argument, 'right')
						);
						path.node.arguments[0] = binary
					} else {
						if (isString(argument)) {
							const binary = t.binaryExpression("+", t.stringLiteral(message), t.stringLiteral(argument.value));
							path.node.arguments[0] = binary
						} else {
							const binary = t.binaryExpression("+", t.stringLiteral(message), t.identifier(argument.name));
							path.node.arguments[0] = binary;
						}
					}
				} else if (consoleExpression && !argument && !consoleExpressionBind) {
					path.node.arguments[0] = t.stringLiteral(message);
				}
			}
		}
	};
};

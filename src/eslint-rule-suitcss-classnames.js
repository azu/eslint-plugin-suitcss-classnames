"use strict";

const isSuitCSSClassNames = (keyNames)=> {
    return keyNames.indexOf("component") !== -1 && keyNames.indexOf("states");
};

const isKeyStartedWithIsPrefix = (key) => {
    return /is\-/.test(key);
};
// ルール定義。
module.exports = function (context) {
    return {
        ObjectExpression(node) {
            // Object that will be a map of properties--safe because we will
            // prefix all of the keys.
            const keyNames = node.properties.map(property => {
                if (property.type !== "Property") {
                    return;
                }
                return property.key.name || property.key.value;
            });
            if (!isSuitCSSClassNames(keyNames)) {
                return;
            }
            const states = node.properties.filter(function (property) {
                if (property.type !== "Property") {
                    return false;
                }
                var keyName = property.key.name || property.key.value;
                return keyName === "states";
            })[0].value;

            states.properties.forEach(property => {
                const keyName = property.key.name || property.key.value;
                if (!isKeyStartedWithIsPrefix(keyName)) {
                    context.report({node: node, message: "`states` property key name should start with is-*"});
                }
            });
        }
    }
}
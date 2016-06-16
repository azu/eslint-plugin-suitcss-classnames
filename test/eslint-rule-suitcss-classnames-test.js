"use strict";
const RuleTester = require("eslint").RuleTester;
const tester = new RuleTester();
import rule from "../src/eslint-rule-suitcss-classnames";
tester.run("eslint-rule-suitcss-classnames", rule, {
    valid: [
        {code: "suitCssName({ component: 'Component', states : { } })"},
        {code: "suitCssName({ component: 'Component', states : { 'is-state': true } });"}
    ],
    invalid: [
        {
            code: "suitCssName({ component: 'Component', states : { 'state': true } });",
            errors: ["States's property key name(state) should start with is-*"]
        },
        {
            code: "suitCssName({ component: 'Component', states : { 'isState': true } });",
            errors: ["States's property key name(isState) should start with is-*"]
        }
    ]
});

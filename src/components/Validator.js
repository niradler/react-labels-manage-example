class Validator {
    constructor(rules) {
        this.rulesList={...rules,
            email:new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        };
    }
    rules(rule) {
        return this.rulesList[rule];
    }
    test(content, rule) {
        return new RegExp(this.rules(rule)).test(content);
    }
}
const v = new Validator();
export default v;
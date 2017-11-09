class Validator {
    constructor(rules) {
        this.rulesList = { ...rules,
            email: new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
            password: new RegExp(/[0-9a-zA-Z]{6,}/)
        };
    }
    rules(rule) {
        return this.rulesList[rule];
    }
    test(obj) {
        let res={
            "isValid":true
        };
        for (let c in obj) {
            let t = new RegExp(this.rules(c)).test(obj[c]);
            res[c]={
                content:obj[c],
                isValid:t
            }
            if(!t)res.isValid= false;
        }
        return res;
    }
}
const v = new Validator();
export default v;
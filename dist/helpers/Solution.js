"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolutionFactory = void 0;
var SolutionFactory = /** @class */ (function () {
    function SolutionFactory(owner, email) {
        this.owner = owner;
        this.email = email;
        //@ts-ignore
        if (!global['emails'])
            global['emails'] = [];
        //@ts-ignore
        global['emails'].push(this.email);
        //@ts-ignore
        global['emails'] = Array.from(new Set(global['emails']));
    }
    SolutionFactory.prototype.createSolution = function (questionName, callback) {
        return {
            user: this.owner,
            for: questionName,
            exec: callback,
        };
    };
    return SolutionFactory;
}());
exports.SolutionFactory = SolutionFactory;

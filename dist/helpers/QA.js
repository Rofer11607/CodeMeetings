"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QA = void 0;
var postmarkApiKey = '123009da-bf9e-40cc-a263-f0321fb881b7';
var questions_1 = require("./questions");
var postmark = __importStar(require("postmark"));
var client = new postmark.ServerClient(postmarkApiKey);
var QA = /** @class */ (function () {
    function QA() {
        this.questions = new questions_1.questions();
    }
    QA.prototype.validateQuestion = function (solution) {
        //@ts-ignore
        this.currentQuestion = this.questions[solution.for];
        var resolvedValue = solution.exec(this.currentQuestion.input);
        var res = resolvedValue === this.currentQuestion.output;
        if (res) {
            console.log('\x1b[32m', this.currentQuestion.name + " is correct");
            client.sendEmail({
                From: 'Notifications@monsterrg.com',
                //@ts-ignore
                To: global['emails'].join(','),
                Subject: solution.user + " just got a valid solution for " + solution.for,
                TextBody: "" + solution.exec.toString(),
            });
        }
        else {
            throw new Error(this.currentQuestion.name + " expected " + resolvedValue + " to be " + this.currentQuestion.output);
        }
    };
    return QA;
}());
exports.QA = QA;

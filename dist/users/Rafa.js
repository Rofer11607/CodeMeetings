"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rafasSolution = void 0;
var Solution_1 = require("../helpers/Solution");
var rafasSolutionFactory = new Solution_1.SolutionFactory('Raphael', 'rafac@monsterrg.com');
exports.rafasSolution = rafasSolutionFactory.createSolution('test', function (i) {
    return i + 1;
});

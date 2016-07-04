const fs = require('fs');

module.exports = {
  getProblem: problemId => {
    const normalizedId = (problemId < 10) ? `0${problemId}` : problemId;
    const problem = require(`../problems/problem${normalizedId}`);
    return problem;
  }
};

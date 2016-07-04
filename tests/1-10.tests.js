const should = require('chai').should();
const testHelper = require('./testHelper');

describe('1-10', () => {
  it('problem 1', () => {
    const problem = testHelper.getProblem(1);
    const result = eval(`problem.${problem.example}`);
    result.should.equals(problem.result);
  });

  it('problem 2', () => {
    const problem = testHelper.getProblem(2);
    const result = eval(`problem.${problem.example}`);
    result.should.equals(problem.result);
  });

  it('problem 3', () => {
    const problem = testHelper.getProblem(3);
    const result = eval(`problem.${problem.example}`);
    result.should.equals(problem.result);
  });

  it('problem 4', () => {
    const problem = testHelper.getProblem(4);
    const result = eval(`problem.${problem.example}`);
    result.should.equals(problem.result);
  });

  it('problem 5', () => {
    const problem = testHelper.getProblem(5);
    const result = eval(`problem.${problem.example}`);
    result.should.deep.equals(problem.result);
  });

  it('problem 6', () => {
    const problem = testHelper.getProblem(6);
    const result = eval(`problem.${problem.example}`);
    result.should.equals(problem.result);
  });

  it('problem 7', () => {
    const problem = testHelper.getProblem(7);
    const result = eval(`problem.${problem.example}`);
    result.should.deep.equals(problem.result);
  });

  it('problem 8', () => {
    const problem = testHelper.getProblem(8);
    const result = eval(`problem.${problem.example}`);
    result.should.deep.equals(problem.result);
  });






});
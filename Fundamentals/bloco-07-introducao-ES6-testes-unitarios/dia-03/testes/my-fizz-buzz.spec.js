const myFizzBuzz = require('../exercicios/my-fizz-buzz');

describe('Fizzbuzz', () => {
  it('Divisivel', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(9)).toBe('fizz');
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  it('Não divisivel', () => {
    expect(myFizzBuzz(7)).toBe(7);
    expect(myFizzBuzz('7')).toBeFalsy();
  });
});
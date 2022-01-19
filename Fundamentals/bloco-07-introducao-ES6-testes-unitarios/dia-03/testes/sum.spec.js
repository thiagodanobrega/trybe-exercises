const sum = require('../exercicios/sum');
describe('Testando função sum', () => {
  it('Teste se o retorno da soma é o esperado', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  it('Teste se a função sum lança um erro', () => {
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });
});
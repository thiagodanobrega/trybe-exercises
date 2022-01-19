const searchEmployee = require('../exercicios/bonus');

describe('Teste bonus', () => {
  it('Checando se existe e é uma função', () => {
    expect(searchEmployee).toBeDefined();
    expect(typeof searchEmployee).toBe('function');
  });
  it('Testando o retorno correto da função', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
    expect(searchEmployee('4456-4', 'lastName')).toBe('Zuckerberg');
    expect(searchEmployee('5569-4', 'specialities')).toEqual([
      'Frontend',
      'Redux',
      'React',
      'CSS',
    ]);
  });
  it('Testando casos de erro no id', () => {
    expect(() => searchEmployee('pudim', 'firstName')).toThrowError(
      'ID não identificada',
    );
  });
  it('Testando casos de erro na informação', () => {
    expect(() => searchEmployee('1256-4', 'firstFarofa')).toThrowError(
      'Informação indisponível.',
    );
  });
});
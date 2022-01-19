const encript = require('../exercicios/encode-decode');

describe('Encode e decode', () => {
  it('Estão declaradas', () => {
    expect(encript.encode).toBeDefined();
    expect(encript.decode).toBeDefined();
  });
  it('São funções', () => {
    expect(typeof encript.encode).toEqual('function');
    expect(typeof encript.decode).toEqual('function');
  });
  it('Está convertendo as vogais corretamente', () => {
    expect(encript.encode('aeiou')).toBe('12345');
  });
  it('Está convertendo os numeros corretamente', () => {
    expect(encript.decode('12345')).toBe('aeiou');
  });
  it('Está convertendo apenas o que foi definido', () => {
    expect(encript.encode('Pudim')).toBe('P5d3m');
    expect(encript.decode('P5d3m')).toBe('Pudim');
  });
  it('Cumprimento da string retornada', () => {
    expect(encript.encode('Pudim').length).toBe(5);
  });
});
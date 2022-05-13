const service = require('./service')
jest.mock('./service')

test('Verifica se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
  service.randomNumber = jest.fn().mockReturnValue(10);

  expect(service.randomNumber()).toBe(10);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);

})

test('Verifica se a função foi chamada, qual seu retorno, quantas vezes foi chamada e se a implementação acontece apenas uma vez.', () => {
  service.randomNumber = jest.fn().mockImplementation((a, b) => a / b);
  expect(service.randomNumber(4, 2)).toBe(2);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
})

describe('Testando implementações', () => {
  test('Verifique se o mock recebe 3 parâmetros e qual seu retorno.', () => {
    service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
    expect(service.randomNumber(1, 2, 3)).toBe(6);
    expect(service.randomNumber).toHaveBeenCalled();
    service.randomNumber.mockReset();
    service.randomNumber = jest.fn().mockImplementation((a) => a * 2);
    expect(service.randomNumber(2)).toBe(4);
    expect(service.randomNumber).toHaveBeenCalled();
  })

  test('Verifique se o mock recebeu uma nova implementação, que tenha apenas um parâmetro e retorne o dobro.', () => {
    service.randomNumber.mockReset();
    service.randomNumber = jest.fn().mockImplementation((a) => a * 2);
    expect(service.randomNumber(2)).toBe(4);
    expect(service.randomNumber).toHaveBeenCalled();
  })
})


describe('4.Testando implementações', () => {
  test('Verifique se o mock retorna a string em caixa baixa.', () => {
    service.stringUpperCase = jest.fn().mockImplementation((str) => str.toLowerCase());
    expect(service.stringUpperCase('Oi')).toBe('oi');
    expect(service.stringUpperCase).toHaveBeenCalled();
  })

  test('Verifique se o mock retorna a última letra de uma string.', () => {
    service.firstLetterOf = jest.fn().mockImplementation((str) => str.charAt(str.length - 1));
    expect(service.firstLetterOf('Oi')).toBe('i');
    expect(service.firstLetterOf).toHaveBeenCalled();
  })

  test('Verifique se o mock recebe três strings e às concatena.', () => {
    service.concatStr = jest.fn().mockImplementation((strA, strB, strC) => strA.concat(' ', strB, ' ', strC));
    expect(service.concatStr('Oi,', 'como vai', '?')).toBe('Oi, como vai ?');
    expect(service.concatStr).toHaveBeenCalled();
  })

})

describe('5.Testando chamada de API', () => {
  test('Verifique se o mock retorna a string em caixa baixa.', async () => {
    const obj = {
      "message": "https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_3629.jpg",
      "status": "success",
    }
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(obj)
    })

    expect(service.getApiDog()).toEqual(obj)
  })

 
})



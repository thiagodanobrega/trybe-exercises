// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercicio-08");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(');
    getPokemonDetails(
      (pokemon) => pokemon.name === 'Pikachu',
      (error, message) => {
        expect(error).toEqual(expectedError);
        done();
      }
    )
  });

  it("retorna um pokemon que existe no banco de dados", () => {
    const expectedMessage = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';

    getPokemonDetails(
      (pokemon) => pokemon.name === 'Charmander',
      (error, message) => {
        expect(message).toEqual(expectedMessage);
        done();
      }
    )
  });
});
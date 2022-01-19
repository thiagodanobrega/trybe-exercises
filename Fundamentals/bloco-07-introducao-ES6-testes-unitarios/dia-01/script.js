// Parte I

// Exercício 1
const testingScope = (escopo) => {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
}
//testingScope(true);

// Exercício 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortArray = oddsAndEvens.sort((a,b) => a > b ? 1 : -1);
//console.log(`Os números ${sortArray} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

// Parte II

// Exercício 1
const fatorial = (number) => number === 0 ? 1 : (number * fatorial(number - 1));
//console.log(fatorial(5));

// Exercício 2
const longestWord = (str) => {
  let character = 0;
  let word = '';
  str.split(' ').forEach(element => {
    if(character === 0 || character < element.length) {
      character = element.length;
      word = element;
    }
  });
  return word;
}
//console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));

// Exercício 4
const searchLetter = (str) => str.replace('x', 'vs');
const skills = ['Paciência', 'Escuta ativa', 'Determinação', 'Resiliência', 'Comunicação'];
const concatString = (str) => {
  return `${str} ${skills.sort().join(', ')}` ;
}
console.log(concatString(searchLetter('Tryber x aqui! Minhas cinco principais habilidades são:')));
// Parte I

// Exercício 1
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};
// Adicione seu código aqui
emailListInData.forEach(showEmailList);

// Parte II

// Exercício 1
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
  return numbers.find(value => value % 3 === 0 && value % 5 === 0);
}
console.log(findDivisibleBy3And5());

// Exercício 2
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  return names.find(name => name.length === 5);
}
console.log(findNameWithFiveLetters());

// Exercício 3
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  // Adicione seu código aqui
  return musicas.find(obj => obj.id === id);
}
console.log(findMusic('31031685'))

// Parte III

// Exercício 1
const namesArr = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some(element => element === name);
}
console.log(hasName(namesArr, 'Ana'));

// Exercício 2
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  //Adicione seu código aqui
 return arr.every(obj => obj.age >= minimumAge);
}
console.log(verifyAges(people, 18));

// Parte VI

// Exercício 1
// Adicione se código aqui
people.sort((a, b) => a.age > b.age);
console.log(people);
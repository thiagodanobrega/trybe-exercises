// Exercício 1
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  const a = arrays.reduce((acc, item) => acc.concat(item), []);
  return a;
}
//console.log(flatten());

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// Exercício 2
function reduceNames() {
  const str = books.reduce((acc, obj) => acc.concat(obj.author.name), []);
  return `${str.join(', ')}.`;
}
//console.log(reduceNames());

// Exercício 3
function averageAge() {
  const soma = books.reduce((acc, obj) => {
    return acc + obj.releaseYear - obj.author.birthYear; 
  }, 0);
  return soma/books.length
}
//console.log(averageAge())

// Exercício 4
function longestNamedBook() {
  const max = books.reduce((acc,item) => {
    return acc.name.length > item.name.length ? acc : item;
  })
  return max;
}
//console.log(longestNamedBook());

// Exercício 5
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const cont = names.reduce((acc, item) => acc + item.match(/a/gi).length, 0);
  return cont;
}
//console.log(containsA());

// Exercício 6
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const arr = students.map((item, index) => ({
      name: item,
      average: grades[index].reduce((soma, value) => soma + value) / grades[index].length
    }
  ))
  return arr;
}
//console.log(studentAverage())



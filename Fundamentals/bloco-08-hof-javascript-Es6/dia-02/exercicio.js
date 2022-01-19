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
// Exercício 1
function authorBornIn1947() {
  // escreva aqui o seu código
  const objBook = books.find(obj => obj.author.birthYear === 1947);
  return objBook.author.name;
}
//console.log(authorBornIn1947());

// Exercício 2
function smallerName() {
  let nameBook;
  // escreva aqui o seu código
  books.forEach(obj => {
    if (nameBook === undefined || obj.name.length < nameBook.length) {
      nameBook = obj.name;
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
//console.log(smallerName());

// Exercício 3
function getNamedBook() {
  // escreva seu código aqui
  return books.find(obj => obj.name.length === 26);
}
//console.log(getNamedBook());

// Exercício 4
function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
  return books.sort((a,b) => a.releaseYear < b.releaseYear);
}
//console.log(booksOrderedByReleaseYearDesc());

// Exercício 5
const expectedResult = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every(obj => obj.author.birthYear >= 1901 && obj.author.birthYear <= 2000);
}
//console.log(everyoneWasBornOnSecXX());

// Exercício 6
function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
  return books.some(obj => obj.releaseYear >= 1980 && obj.releaseYear <= 1989);
}
//console.log(someBookWasReleaseOnThe80s());

// Exercício 7
function authorUnique() {
  // escreva seu código aqui
  return books.every(
    (book) =>
      !books.some(
        (bookSome) =>
          bookSome.author.birthYear === book.author.birthYear &&
          bookSome.author.name !== book.author.name
      )
  );
}
console.log(authorUnique());





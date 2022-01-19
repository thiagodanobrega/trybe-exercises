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

// Exercício 1
function formatedBookNames() {
  const array = books.map(obj => `${obj.name} - ${obj.genre} - ${obj.author.name}`)
  return array;
};
//console.log(formatedBookNames());

// Exercício 2
function nameAndAge() {
  const array = books.map(obj => {
    return {age: obj.releaseYear - obj.author.birthYear , author: obj.author.name}
  })
  return array.sort((a , b) => a.age > b.age ? 1 : -1);
}
//console.log(nameAndAge());

// Exercício 3
function fantasyOrScienceFiction() {
  const array = books.filter(obj => obj.genre === 'Fantasia' || obj.genre === 'Ficção Científica');
  return array;
}
//console.log(fantasyOrScienceFiction());

// Exercício 4
function oldBooksOrdered() {
  const AnoAtual = new Date().getFullYear();
  const array = books.filter(obj => AnoAtual - obj.releaseYear > 60)
  return array.sort((a,b) => a.releaseYear > b.releaseYear ? 1 : -1)
}
//console.log(oldBooksOrdered());

// Exercício 5
function fantasyOrScienceFictionAuthors() {
  const array = books.filter(obj => obj.genre === 'Fantasia' || obj.genre === 'Ficção Científica').map(obj => obj.author.name);
  return array.sort();
}
//console.log(fantasyOrScienceFictionAuthors());

// Exercício 6
function oldBooks() {
  const AnoAtual = new Date().getFullYear();
  const array = books.filter(obj => AnoAtual - obj.releaseYear > 60).map(obj => obj.name);
  return array;
}
//console.log(oldBooks());

// Exercício 7
function authorWith3DotsOnName() {
  const array = books.find(obj => /([A-Z]\.\s){3}/g.test(obj.author.name))
  return array.name;
}
//console.log(authorWith3DotsOnName());
const { calculateValues } = require('./exercise-01');

const arrNumbers = [];

for (let i = 0; i <= 2; i++) {
  arrNumbers.push(Math.floor(Math.random() * 100 + 1));
}

// UTILIZANDO THEN
calculateValues(...arrNumbers)
  .then(result => console.log(`O resultdo é: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));
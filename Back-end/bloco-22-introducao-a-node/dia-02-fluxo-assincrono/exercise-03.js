const { calculateValues } = require('./exercise-01');

const arrNumbers = [];

for (let i = 0; i <= 2; i++) {
  arrNumbers.push(Math.floor(Math.random() * 100 + 1));
}

// UTILIZANDO ASYNC/AWAIT
async function main() {
  try {
    const result = await calculateValues(...arrNumbers);
    console.log(`O resultdo é: ${result}`);
  } catch (error) {
    console.error(`erro: ${error.message}`);
  }
}

main();
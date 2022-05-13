function calculateValues(num1, num2, num3) {
  return new Promise((resolve, reject) => {
    if(typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') reject(new Error("Informe apenas números"));
    const calc = (num1 + num2) * num3;
    if(calc < 50) reject(new Error("Valor muito baixo"));
    resolve(calc);
  })
}

module.exports = {calculateValues};

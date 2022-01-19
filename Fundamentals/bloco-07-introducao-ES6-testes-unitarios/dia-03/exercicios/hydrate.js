function hydrate(string) {
  // seu código aqui
  let nuns = string.replace(/\D/gim, '');
  let res = 0;
  for (let n of nuns) {
    res += Number(n);
  }

  if (res === 1) {
    return `${res} copo de água`;
  }
  return `${res} copos de água`;
}

module.exports = hydrate;
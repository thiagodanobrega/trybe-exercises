function techList(arr, name) {
  // seu código aqui
  arr = arr.sort();
  let res = [];
  if (arr.length >= 1) {
    for (let tech of arr) {
      res.push({ tech: `${tech}`, name: `${name}` });
    }
  } else {
    res = 'Vazio!';
  }

  return res;
}
module.exports = techList;

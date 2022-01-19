function encode(string) {
  let code = [
    { letter: /[a]/g, value: '1' },
    { letter: /[e]/g, value: '2' },
    { letter: /[i]/g, value: '3' },
    { letter: /[o]/g, value: '4' },
    { letter: /[u]/g, value: '5' },
  ];
  for (let cod of code) {
    string = string.replace(cod.letter, cod.value);
  }
  return string;
}

function decode(string) {
  // seu código aqui
  let code = [
    { letter: /[1]/g, value: 'a' },
    { letter: /[2]/g, value: 'e' },
    { letter: /[3]/g, value: 'i' },
    { letter: /[4]/g, value: 'o' },
    { letter: /[5]/g, value: 'u' },
  ];
  for (let cod of code) {
    string = string.replace(cod.letter, cod.value);
  }
  return string;
}

module.exports = { encode, decode };

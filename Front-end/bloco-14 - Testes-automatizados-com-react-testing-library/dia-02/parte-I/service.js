const randomNumber = () => Math.floor(Math.random() * 100);

const stringUpperCase = (str) => str.toUpperCase();

const firstLetterOf = (str) => str.charAt(0);

const concatStr = (strA, strB) => strA.concat(' ', strB);

const getApiDog = async () => {
  const API_URL = 'https://icanhazdadjoke.com/';
  fetch(API_URL, { headers: { Accept: 'application/json' } })
    .then((response) => response.json())
    .then((data) => data);
}


console.log(getApiDog());

module.exports = {randomNumber, stringUpperCase, firstLetterOf, concatStr}
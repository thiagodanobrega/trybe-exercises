const fetchShips = async () => {
  const API_URL =  'https://api.coincap.io/v2/assets';

  const allCoins = await fetch(API_URL)
    .then(response => response.json())
    .then(result => result.data);

  return allCoins;
}

const insertCoins = async () => {
  const data = await fetchShips();
  const obj = data.slice(0,10);
  const list = document.getElementById('coins-list');
  obj.forEach(({name, symbol, priceUsd}) => {
    const itemList = document.createElement('li');
    itemList.innerHTML = `${name} (${symbol}): US$ ${priceUsd}.`
    list.appendChild(itemList);
  });
}

window.onload = () => insertCoins();
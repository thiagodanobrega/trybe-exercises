const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/drinks', (req, res) => {
  res.status(200).json(drinks);
});

app.get('/drinks/search', (req, res) => {
  const {name} = req.query;
  const drink = drinks.filter(d => d.name.includes(name));
  if(drink.length === 0) return res.status(404).json({message: "Drink not found"});
  res.status(200).json(drink);
})

app.post('/drinks', (req, res) => {
  const {id, name, price} = req.body;
  drinks.push({id ,name, price});
  res.status(201).json({message: 'Criado com sucesso!'});
})

app.put('/drinks/:id', (req, res) => {
  const {id} =req.params;
  const {name} = req.body;
  const drinkIndex = drinks.findIndex(d => d.id === parseInt(id)); 
  if(!drinkIndex) return res.status(404).json({message: "Drink not found"});
  drinks[drinkIndex] = {...drinks[drinkIndex], name};
  res.status(204).json({message: 'Alterado com sucesso!'});
})

app.delete('/drinks/:id', (req, res) => {
  const {id} =req.params;
  const drinkIndex = drinks.findIndex(d => d.id === parseInt(id)); 
  if(!drinkIndex) return res.status(404).json({message: "Drink not found"});
  drinks.splice(drinkIndex, 1);
  res.status(204).json({message: 'Alterado com sucesso!'});
})

app.get('/drinks/:id', (req, res) => {
  const {id} = req.params;
  const drink = drinks.find(d => d.id === parseInt(id));
  if(!drink) return res.status(404).json({message: "Drink not found"});
  res.status(200).json(drink);
})

app.all('*', (req, res) => {
  res.status(404).json({message: "Rota não existe"});
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

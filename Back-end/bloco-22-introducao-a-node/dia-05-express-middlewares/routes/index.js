const express = require('express');
const crypto = require('crypto');
const middlewares = require('../middlewares');

const routes = express.Router();

routes.use(middlewares);

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

const regex = /^(((0[1-9]|[12][0-9]|30)[-/]?(0[13-9]|1[012])|31[-/]?(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])[-/]?02)[-/]?[0-9]{4}|29[-/]?02[-/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$ /i;

routes.post('/sales', (req, res) => {
  const {productName, infos} = req.body;
  
  if(!productName) return res.status(400).json({"message": "O campo productName é obrigatório" });

  if(productName.length < 4) return res.status(400).json({"message": "O campo productName deve ter pelo menos 4 caracteres"});

  if(!infos) return res.status(400).json({"message": "O campo infos é obrigatório" });

  if(regex.test(infos.saleDate)) return res.status(400).json({"message": "O campo saleDate não é uma data válida" });
  
  if(!infos.warrantyPeriod) return res.status(400).json({"message": "O campo warrantyPeriod é obrigatório"});

  if(infos.warrantyPeriod < 1 || infos.warrantyPeriod > 3) return res.status(400).json({"message": "O campo warrantyPeriod precisa estar entre 1 e 3"});

  res.status(201).json({"message": "Venda cadastrada com sucesso" });
});

routes.post('/signup', (req, res) => {
  const {email, password, firstName, phone} = req.body;
  if(!email || !password || !firstName || !phone) return res.status(400).json({ "message": 'missing fields' });
  res.status(200).json({"token": `${generateToken()}`})
})

module.exports = routes;
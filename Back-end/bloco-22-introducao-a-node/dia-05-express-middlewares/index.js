const express = require('express');
const app = express();
app.use(express.json());
app.use('/', require('./routes/index'));
app.listen(3001, () => console.log('Aplicação rodando na porta 3001'));



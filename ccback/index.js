const express = require('express');
const conectarDB = require('./config/db');

const app = express();

conectarDB();

//Definimos ruta principal
app.get('/', (req, res) => {
    res.send('Hola Mundo')
})

app.listen(2099, () => {
    console.log("El servidor esta arriba")
})
const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors')
const app = express();

conectarDB();
app.use(express.json());
app.use(cors())

app.use('/db/users', require('./routes/registro'));

//Definimos ruta principal
// app.get('/', (req, res) => {
//     res.send('Hola Mundo')
// })

app.listen(2099, () => {
    console.log("El servidor esta arriba")
})
const mongoose = require('mongoose');
require("dotenv").config({ path: 'config.env' });

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('BD CONECTADA')
    } catch (error) {
        console.log('Error al conectar con la base de datos:', error);
        process.exit(1);
    }
}

module.exports = conectarDB

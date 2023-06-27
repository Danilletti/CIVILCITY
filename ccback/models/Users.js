const { text } = require('express')
const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    universidad: {
        type: String,
        required: false
    },
    fec_cre: {
        type: Date,
        default: Date.now()
    }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('user', UserSchema)

const express = require('express'); //importamos el servicio de express 
const router = express.Router();//llamamos para controlar las rutas junto con express
const userController = require('../controllers/userController')

router.post('/', userController.crearUsuario)
router.delete('/:id', userController.eliminarUsuario)
router.put('/:id', userController.actualizarUsuario)
router.get('/:id', userController.obtenerUsuario)
router.get('/', userController.obtenerUsuarios)

module.exports = router; //exportamos el modulo de rutas

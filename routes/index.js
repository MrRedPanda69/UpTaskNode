const express = require('express');
const router = express.Router();

//import al controlador
const proyectosController = require('../controllers/proyectosController');

module.exports = function() {
    // Route para el home
    router.get('/', proyectosController.proyectosHome);
    router.get('/nuevo-proyecto', proyectosController.formProyecto);
    router.post('/nuevo-proyecto', proyectosController.nuevoProyecto);
    
    return router;
}

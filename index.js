const express = require('express');
const routes = require('./routes');
const path = require('path');

// Crear conexion a DB
const db = require('./config/db');

// Importar model
require('./models/Proyectos');

db.sync()
    .then(() => console.log('Conectado al server'))
    .catch( error => console.log(error) )

// Crear app de express 
const app = express();

// Donde cargar static files 
app.use(express.static('public'));

// Habilitar Pug
app.set('view engine', 'pug');

// Añadir carpeta de views
app.set('views', path.join(__dirname, './views'));

// Leer datos del form (bodyParser deprecated, nueva sintaxis abajo)
app.use(express.urlencoded( {extended: true} ));

app.use('/', routes());


app.listen(4000);

// const dotenv = require('dotenv');
const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
const path = require("path");
// Inicializamos  el Motor de plantillas elegido 
app.set('view engine', 'ejs')
app.use(express.static('view'))
app.use(express.static(path.join(__dirname, 'public')));
// const { leerFrutas,guardarFrutas,  obtenerFrutaFind,actualizarFruta, eliminarFruta } = require('./src/frutas.manager')
const PORT = process.env.PORT || 3009;
let DB = [];
const fs = require('fs');

// process.env.DATABASE_PATH ME TIRA ERROR 
const datos = fs.readFileSync(__dirname + '/src/database/trailerflix.json', 'utf8' )
const TRAILERFLIX = JSON.parse(datos)
// console.log(TRAILERFLIX);

app.get("/", (req, res) => { 
    // res.send('Bienvenido a nuestro sitio generado a partir de un motor de plantillas.')
    //RUTA DINAMICA 
    const data = {
        title: 'BIENVENIDO',
        message: 'Bienvenido a la primer entrega',
        name: 'Backend - Ingenias',
    }
    res.render('index', data)
}); 



app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});



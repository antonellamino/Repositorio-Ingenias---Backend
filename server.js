
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
    const peliculas = [
        {
            foto: '../image/001-gambito.jpg',
            titulo: 'Gambito de dama',
            descripcion: 'En los cincuenta, una joven de un orfanato descubre que tiene un increíble don para el ajedrez y recorre el arduo camino a la fama mientras lucha contra las adicciones.',
            trailer: "https://www.youtube.com/watch?v=-BBgzgNgzeQ"
        },
        {
            foto: '../image/001-Guason.jpg',
            titulo: 'Guason',
            descripcion: 'Después de los devastadores eventos de los Vengadores: Infinity War (2018), el universo está en ruinas. Con la ayuda de los aliados restantes, los Vengadores se reúnen una vez más para revertir las acciones de Thanos y restaurar el equilibrio del universo.',
            trailer: "https://www.youtube.com/watch?v=TobNCFMK_bs"
        },
        {
            foto: '../image/chernobyl.jpg',
            titulo: 'Chernobyl',
            descripcion: 'La miniSerie se centra en el desgarrador alcance del desastre de la planta nuclear que ocurrió en Ucrania en abril de 1986, revelando cómo y por qué ocurrió, además contando las sorprendentes y notables historias de los héroes que lucharon y cayeron. ',
            trailer: "https://www.youtube.com/embed/s9APLXM9Ei8"
                },

        // Agrega más películas aquí
    ];

    res.render('index', { peliculas });
}); 



app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});



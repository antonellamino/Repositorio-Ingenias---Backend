

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

//este endpoint retorna el json TRAILERFLIX
app.get('/catalogo', (req, res) => { //ver si hay que darle estilo o como
    res.json(TRAILERFLIX);
});


// // process.env.DATABASE_PATH ME TIRA ERROR 
// const datos = fs.readFileSync(__dirname + '/src/database/trailerflix.json', 'utf8' )
// const TRAILERFLIX = JSON.parse(datos)
// // console.log(TRAILERFLIX);

//este endpoint retorna un elemento si lo encuentra en la lista de TRAILERFLIX y si no, retorna un error
app.get('/trailer/:id', (req, res) => {
    const id = parseInt(req.params.id.trim());
    let title = TRAILERFLIX.find(title => title.id === id);
    if (title != undefined) {
        const data = {
            id: title.id,
            titulo: title.titulo,
            trailer: title.trailer?.trim()
        };
        res.json(data);
    } else {
        res.status(404).json({ "Error": "No se encontraron titulos que contengan el id indicado" });
    }
});



app.get('/titulo/:title', (req, res) => {
    const nombre = req.params.title.trim().toLowerCase();
    const filtro = TRAILERFLIX.filter(filtro=>filtro.titulo.toLowerCase().includes(nombre));
    
    if(filtro.length > 0){
      res.json(filtro)
    }else{
        res.status(404).send("El título que busca no se encuentra disponible en nuestra plataforma.");
    }
});

//Endpoint: Para el endpoint /categoria/:cat utiliza también .filter() y retorna todos los resultados 
//encontrados. (Aquí son dos posibles valores solamente)

app.get('/categoria/:cat', (req, res) => {
    const cate = req.params.cat.trim().toLowerCase();
    if (cate == 'serie' | cate == 'película') {
    const nombre = TRAILERFLIX.filter(nombre => nombre.categoria.toLowerCase() == cate);

    if (nombre.length > 0) {
        res.json(nombre);
    } else {
        res.status(404).send("Para la categoria solicitada no existe ningun titulo ");
    }
 } else {
     res.status(404).send("No existe la categoria solicitada, recuerde que el filtro es por Serie o Película ");
 }
});


//Para el endpoint /reparto/:act aplica también la misma lógica utilizada en el endpoint/titulo/:title. 
//(Como resultado, retorna solo un array con la propiedad “reparto” y la propiedad “titulo” 
//y sus respectivos datos (no devuelvas todo el contenido) ¿recuerdas a .map()?

app.get('/reparto/:act', (req, res) => {
    const act = req.params.act.trim().toLowerCase();
    const reparto = TRAILERFLIX.filter(pelicula => pelicula.reparto.toLowerCase().includes(act));

    if (reparto.length > 0) {
        const resultado = reparto.map(pelicula => {
            return {
                titulo: pelicula.titulo,
                reparto: pelicula.reparto
            };
        });
        res.json(resultado);
    } else {
        res.status(404).send('No se encuentra un actor/actriz con ese nombre en el reparto de ninguna película.');
    }
})


//Para el endpoint /reparto/:act aplica también la misma lógica utilizada en el endpoint/titulo/:title. 
//(Como resultado, retorna solo un array con la propiedad “reparto” y la propiedad “titulo” 
//y sus respectivos datos (no devuelvas todo el contenido) ¿recuerdas a .map()?

app.get('/reparto/:act', (req, res) => {
    const act = req.params.act.trim().toLowerCase();
    const reparto = TRAILERFLIX.filter(pelicula => pelicula.reparto.toLowerCase().includes(act));

    if (reparto.length > 0) {
        const resultado = reparto.map(pelicula => {
            return {
                titulo: pelicula.titulo,
                reparto: pelicula.reparto
            };
        });
        res.json(resultado);
    } else {
        res.status(404).send('No se encuentra un actor/actriz con ese nombre en el reparto de ninguna película.');
    }
})

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});

// // const dotenv = require('dotenv');
// const express = require('express');
// // const bodyParser = require('body-parser');
// const app = express();
// const path = require("path");

// // Inicializamos  el Motor de plantillas elegido 
// app.set('view engine', 'ejs')
// app.use(express.static('view'))
// app.use(express.static(path.join(__dirname, 'public')));

// // const { leerFrutas,guardarFrutas,  obtenerFrutaFind,actualizarFruta, eliminarFruta } = require('./src/frutas.manager')
// const PORT = process.env.PORT || 3009;
// let DB = [];
// const fs = require('fs');

// // process.env.DATABASE_PATH ME TIRA ERROR 
// const datos = fs.readFileSync(__dirname + '/src/database/trailerflix.json', 'utf8' )
// const TRAILERFLIX = JSON.parse(datos)
// // console.log(TRAILERFLIX);

// app.get("/", (req, res) => { 
//     // res.send('Bienvenido a nuestro sitio generado a partir de un motor de plantillas.')
//     //RUTA DINAMICA 
//     const data = {
//         title: 'BIENVENIDO',
//         message: 'Bienvenido a la primer entrega',
//         name: 'Backend - Ingenias',
//     }
//     res.render('index', data)
// }); 

// //Retorna el archivo json
// app.get('/catalogo', (req,res) => {
//     res.json(TRAILERFLIX);
// });

//Endpoint: llamado /titulo/:title que liste el catálogo de películas y/o series que se 
//aproxime al título enviado. (la búsqueda del nombre debe ser parcial)

app.get('/titulo/:title', (req,res)=>{
    const nombre = req.params.title.trim().toLowerCase();
    const filtro = TRAILERFLIX.filter(filtro=>filtro.titulo.toLowerCase().includes(nombre));
    
    if(filtro !== []){
      res.json(filtro)
    }else{
        res.status(404).send("El título que busca no se encuentra disponible en nuestra plataforma.");
    }
});

//Endpoint: Para el endpoint /categoria/:cat utiliza también .filter() y retorna todos los resultados 
//encontrados. (Aquí son dos posibles valores solamente)

app.get('/categoria/:cat', (req,res) => {
    const cate = req.params.cat.trim().toLowerCase();
    const nombre = TRAILERFLIX.filter(nombre => nombre.categoria.toLowerCase() == cate); 
   

    if(nombre !== []){
        res.json(nombre);
    }else{
        res.status(404).send("El título que busca no se encuentra en la categoria");
    }
});

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});
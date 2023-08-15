
//este endpoint retorna el json TRAILERFLIX
app.get('/catalogo', (req, res) => { //ver si hay que darle estilo o como
    res.json(TRAILERFLIX);
});


//este endpoint retorna un elemento si lo encuentra en la lista de TRAILERFLIX y si no, retorna un error
app.get('/trailer/:id', (req, res) => {
    const id = parseInt(req.params.id.trim());
    let title = TRAILERFLIX.find(title => title.id === id);
    if (title != undefined){
        const data = {
            id: title.id,
            titulo: title.titulo,
            trailer: title.trailer?.trim()
        };
        res.json(data);
    } else {
        res.status(404).json({"Error" : "No se encontraron titulos que contengan el id indicado"});
    }
});
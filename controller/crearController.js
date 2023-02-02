const crearNombre = (req, res) =>{

    res.status(201).json({
        nombre : req.body.nombre,
        status : "success"
    })
}

module.exports={crearNombre}
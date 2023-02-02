const nameUser = (req, res) => {
    nombre = req.params.nombre;
    apellido = req.params.apellido;
    res.send(`Hola ${nombre} ${apellido}`)
}

module.exports = {nameUser}
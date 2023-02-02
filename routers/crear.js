const express = require('express')
const { crearNombre } = require('../controller/crearController')
const router = express.Router()

router.post("/nombre", crearNombre)



module.exports=router


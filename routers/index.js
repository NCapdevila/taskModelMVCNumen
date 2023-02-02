const express = require('express')
const saludo = require('../controller/indexController')
const router = express.Router()


router.get('/', saludo.greeting)

module.exports = router
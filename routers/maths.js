const express = require('express');
const { authFun } = require('../controller/authController');
const { dividirFun } = require('../controller/dividirController');
const { sumarFun } = require('../controller/sumarController');
const router = express.Router()


router.get('/dividir/:dividendo/:divisor', dividirFun)

router.get('/sumar/:num1/:num2', sumarFun)

router.get('/auth', authFun)

module.exports = router
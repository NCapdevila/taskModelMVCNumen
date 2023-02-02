const express = require('express')
const router = express.Router()
const { nameUser } = require('../controller/userController')


router.get('/:nombre/:apellido', nameUser)

module.exports = router
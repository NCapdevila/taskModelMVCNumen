const express = require('express')
const { listFun } = require('../controller/listController')
const router = express.Router()


router.get('/listadecompras', listFun)

module.exports = router
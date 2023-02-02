const express = require('express')
const logger = require("morgan");//muestra los metodos http
//middleware a nivel aplicación
const cors = require("cors");


const app = express()

app.use(logger("dev"))
app.use(cors())
app.use(express.json())//es para que no tenga ningún problema con json
//get es un metodo HTTP

const indexRouter = require ('./routers/index')
const userRouter = require ('./routers/user')
const mathsRouter = require('./routers/maths')
const listRouter = require ('./routers/list')
const crearRouter = require('./routers/crear')
app.use("/", indexRouter)
app.use("/user", userRouter)
app.use("/maths/", mathsRouter)
app.use("/list", listRouter)
app.use("/crear", crearRouter)

module.exports = app
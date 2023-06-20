const express = require('express')
const bodyParser = require('body-parser')
const pessoasRouter = require('./routes/pessoasRouter')
const turmasRouter = require('./routes/turmasRouter')

const app = express()
const port = 3000

app.use(bodyParser.json())

//Rotas
app.use(pessoasRouter)
app.use(turmasRouter)

app.listen(port, () => console.log(`Servidor rodando na porta: http://localhost:${port}/ `))

module.exports = app


const pessoasController = require('../controller/pessoasController')
const express = require('express')

const router = express.Router()

router.get('/pessoas', pessoasController.showPessoas)
router.get('/pessoas/:id', pessoasController.showPessoa)
router.post('/pessoas/create', pessoasController.createPessoa)
router.put('/pessoas/update/:id', pessoasController.updatePessoa)
router.delete('/pessoas/delete/:id', pessoasController.deletePessoa)

router.get('/pessoas/matriculas/:id', pessoasController.showMatricula)
router.post('/pessoas/:estudanteId/matriculas/create', pessoasController.createMatricula)
router.put('/pessoas/matriculas/update/:id', pessoasController.updateMatricula)
router.delete('/pessoas/matriculas/delete/:id', pessoasController.deleteTurma)

module.exports = router
const turmasController = require('../controller/turmasController')
const express = require('express')

const router = express.Router()

router.get('/turmas', turmasController.showTurmas)
router.get('/turmas/:id', turmasController.showTurma)
router.post('/turmas/create', turmasController.createTurma)
router.put('/turmas/update/:id', turmasController.updateTurma)
router.delete('/turmas/delete/:id', turmasController.deleteTurma)

module.exports = router
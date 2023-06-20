const { Turmas } = require('../models')

const turmasController = {

    showTurmas: async (req, res) => {

        const turmas = await Turmas.findAll()

        res.send(turmas)
    },

    showTurma: async (req, res) => {

        const { id } = req.params

        const turma = await Turmas.findByPk(id)

        if (turma) {
            res.send(turma)

        } else {
            res.status(400).send(`Não há turma com o id ${id}`)
        }

    },

    createTurma: async (req, res) => {

        const { data_inicio, docente_id, nivel_id } = req.body

        const criarTurma = { data_inicio, docente_id, nivel_id }

        if (criarTurma) {
            const turmaCriada = await Turmas.create(criarTurma)
            return res.send(turmaCriada)
        }

    },

    updateTurma: async (req, res) => {
        const { id } = req.params

        const { data_inicio, docente_id, nivel_id } = req.body

        const atualizarTurma = { data_inicio, docente_id, nivel_id }

        if (atualizarTurma) {
            await Turmas.update(atualizarTurma, {
                where: {
                    id
                }
            })
            return res.send(atualizarTurma)
        }

    },

    deleteTurma: async (req, res) => {

        const { id } = req.params

        await Turmas.destroy({
            where: {
                id
            }
        })

        res.send('Apagado')
    }

}

module.exports = turmasController
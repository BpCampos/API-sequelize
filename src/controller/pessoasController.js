const { Pessoas, Matriculas } = require('../models')

const pessoasController = {

    showPessoas: async (req, res) => {

        const pessoas = await Pessoas.findAll()

        res.send(pessoas)
    },

    showPessoa: async (req, res) => {

        const { id } = req.params

        const pessoa = await Pessoas.findByPk(id)

        res.send(pessoa)

    },

    createPessoa: async (req, res) => {

        const { nome, ativo, email, role } = req.body

        const criarPessoa = { nome, ativo, email, role }

        if (criarPessoa) {
            const pessoaCriada = await Pessoas.create(criarPessoa)
            return res.send(pessoaCriada)
        }

    },

    updatePessoa: async (req, res) => {
        const { id } = req.params

        const { nome, ativo, email, role } = req.body

        const atualizarPessoa = { nome, ativo, email, role }

        if (atualizarPessoa) {
            await Pessoas.update(atualizarPessoa, {
                where: {
                    id
                }
            })
            return res.send(atualizarPessoa)
        }

    },

    deletePessoa: async (req, res) => {

        const { id } = req.params

        await Pessoas.destroy({
            where: {
                id
            }
        })

        res.send('Apagado')
    },

    showMatricula: async (req, res) => {

        const { id } = req.params

        const matricula = await Matriculas.findOne({
            where: {
                id
            }
        })

        if (matricula) {
            res.send(matricula)

        } else {
            res.status(400).send(`Não há matricula com o id ${id}`)
        }

    },

    createMatricula: async (req, res) => {

        const { estudanteId } = req.params

        const criarMatricula = { ...req.body, estudante_id: estudanteId }

        if (criarMatricula) {
            const matriculaCriada = await Matriculas.create(criarMatricula)
            return res.send(matriculaCriada)
        }

    },

    updateMatricula: async (req, res) => {
        const { id } = req.params

        const atualizarMatricula = { ...req.body }

        if (atualizarMatricula) {
            await Matriculas.update(atualizarMatricula, {
                where: {
                    id
                }
            })
            return res.send(atualizarMatricula)
        }

    },

    deleteTurma: async (req, res) => {

        const { id } = req.params

        await Matriculas.destroy({
            where: {
                id
            }
        })

        res.send('Apagado')
    }

}

module.exports = pessoasController
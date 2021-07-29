const toDoItem = require('../services/toDoItem.service')
const mailBoxLayer = require('../services/mailBoxLayer.service')
const catFacts = require('../services/catFacts.service')
const { BadRequest } = require('../utils/customErrors')

module.exports = {
    create: async (req,res,next) => {
        try {
            const emailCheck = await mailBoxLayer.checkEmail(req.body.email)

            if(emailCheck.valid) {
                res.status(200).send(await toDoItem.create(req.body))
            } else {
                throw new BadRequest(`email invalido.${emailCheck.didYouMean ? ' você quis dizer ' + emailCheck.didYouMean + '?' : ' Sem sugestões'}`)
            }
        } catch (err) {
            next(err)
        }
    },

    getAll: async (req,res,next) => {
        try{
            res.status(200).send(await toDoItem.getAll())
        } catch (err) {
            next(err)
        }
    },

    completeItem: async (req, res, next) => {
        try{
            res.status(200).send(await toDoItem.completeItem(req.params.id))
        } catch (err) {
            next(err)
        }    
    },

    rollbackItem: async (req, res, next) => {
        try{
            res.status(200).send(await toDoItem.rollbackItem(req.params.id))
        } catch (err) {
            next(err)
        }    
    },

    getDogFacts: async (req, res, next) => {
        try{
            res.status(200).send(
                await Promise.all((await catFacts.getfacts())
                .map(el => toDoItem.create(
                    {
                        email:'eu@me.com',
                        name:'Eu',
                        description:el
                    }
                )))
            )
        } catch (err) {
            next(new Error('Parece que há algo de errado com o nosso fornecedor de fatos sobre cachorrinhos, (esperamos 10s pela resposta deles, e nada!) que tal ir ler um gibi?'))
        }    
    },
}
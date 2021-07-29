const { BadRequest } = require('../utils/customErrors')

module.exports = {
    toDoListValidation: async (req, res, next) => {
        try {

            const email = req.body.email
            const description = req.body.description
            const name = req.body.name
            
            if(!name) throw new BadRequest('name é obrigatorio')
            if(!email) throw new BadRequest('email é obrigatorio')
            if(!description) throw new BadRequest('description é obrigatorio')
            
            next()
        } catch(err) {
            next(err)
        }
    },

    codeValidation: async (req, res, next) => {
        try {
            const code = req.body.code
            if(!code) throw new BadRequest('code é obrigatorio')
            next()
        } catch(err) {
            next(err)
        }
    }
}
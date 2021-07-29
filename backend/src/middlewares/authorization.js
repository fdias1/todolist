const { Unauthorized } = require('../utils/customErrors')

module.exports = {
    supervisorPermission: async (req, res, next) => {
        try {
            const code = req.body.code
            if (code === process.env.CODE) {
                next()
            } else {
                throw new Unauthorized('senha de supervisor inválida')
            }
        } catch(err) {
            next(err)
        }
    }
}
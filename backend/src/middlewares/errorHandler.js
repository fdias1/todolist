const { GeneralApiError } = require('../utils/customErrors')

module.exports = (err,req,res,next) => {
    if (err instanceof GeneralApiError) {
        res.status(err.getStatusCode()).send({message:err.message})
    } else {
        res.status(500).send({message:err.message})
    }
}

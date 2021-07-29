const axios = require('axios')
const mailBoxLayerApiAddress = process.env.MAIL_BOX_LAYER_API_ADDRESS
const mailBoxLayerApiKey = process.env.MAIL_BOX_LAYER_API_KEY

module.exports = {
    checkEmail: async (email) => {
        const data = (await axios.get(
            `${mailBoxLayerApiAddress}?access_key=${mailBoxLayerApiKey}&email=${email}`
        ,{ timeout: 10000 })).data

        return {
            valid:data.mx_found && data.format_valid,
            didYouMean:data.did_you_mean
        }
    }
}
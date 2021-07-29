const axios = require('axios')
const catFactsApiAddress = process.env.CAT_FACTS_API_ADDRESS

module.exports = {
    getfacts: async () => {
        const data = (await axios.get(
            `${catFactsApiAddress}?animal_type=dog&amount=3`
        ,{ timeout: 10000 })).data
        
        return data.map(el => el.text)
    }
}
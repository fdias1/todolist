import axios from 'axios'

    const baseUrl = process.env.REACT_APP_API_ADDRESS || 'http://localhost:3000'

export function getItems() {
    return axios.get(`${baseUrl}/lista`)
    .then(fetch => fetch.data)
    .catch(err => {
        alert(err?.response?.data?.message || 'algo deu errado, tente novamente mais tarde')
        return null
    })
}

export function newItem({name, email, description}) {
    return axios.post(`${baseUrl}/lista`,{ name, email, description })
    .then(fetch => fetch.data)
    .catch(err => {
        alert(err?.response?.data?.message || 'algo deu errado, tente novamente mais tarde')
        return null
    })
}

export function completeItem(id) {
    return axios.put(`${baseUrl}/lista/completar/${id}`)
    .then(fetch => fetch.data)
    .catch(err => {
        alert(err?.response?.data?.message || 'algo deu errado, tente novamente mais tarde')
        return null
    })
}

export function rollbackItem(id, code) {
    return axios.put(`${baseUrl}/lista/voltar/${id}`,{ code })
    .then(fetch => fetch.data)
    .catch(err => {
        alert(err?.response?.data?.message || 'algo deu errado, tente novamente mais tarde')
        return null
    })
}

export function dogfacts() {
    return axios.post(`${baseUrl}/lista/fatos`)
    .then(fetch => fetch.data)
    .catch(err => {
        alert(err?.response?.data?.message || 'algo deu errado, tente novamente mais tarde')
        return null
    })
}
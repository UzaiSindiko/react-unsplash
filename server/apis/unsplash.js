const axios = require('axios')

module.exports = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: process.env.API
    }
})
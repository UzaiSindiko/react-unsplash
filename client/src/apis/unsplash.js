import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 026564c4e431b51cb6c2df4be9fcacef51a11e43365e28990ccb1c5a0b6a247e'
    }
})
import api from './api.service.js'

const jokeService = async () => {
    const data = await api.get('/randomjokes', {
        params: {
            limit: 1
        }
    })
    return data;
}

export default jokeService;
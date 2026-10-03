import api from './api.service.js'

const jokeService = async () => {
    const response = await api.get('/randomjokes')
    const jokes = response.data.data.data;
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

export default jokeService;
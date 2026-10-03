import api from './api.service.js'

const jokeService = async () => {
    const response = await api.get(import.meta.env.VITE_JOKE_API_URL)
    console.log(response);

    if(response.data.joke) {
        return {
            joke: response.data.joke
        };
    }
    else {
        const setup = response.data.setup;
        const delivery = response.data.delivery
        
        return {
            setup, 
            delivery
        };
    }
}

export default jokeService;
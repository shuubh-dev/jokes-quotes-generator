import api from './api.service.js'

const jokeService = async () => {
    const response = await api.get(import.meta.env.VITE_JOKE_API_URL)
    console.log(response);

    if(response.data.type === 'single') {
        const joke = response.data.joke
        
        return {
            joke
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
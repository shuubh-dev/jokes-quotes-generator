import api from './api.service.js'

const quoteService = async () => {
    const response = await api.get('./quotes')
    const quotes = response.data.data.data
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

export default quoteService;
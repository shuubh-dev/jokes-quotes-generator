import api from './api.service.js'

const quoteService = async () => {
    const response = await api.get(import.meta.env.VITE_QUOTE_API_URL)
    const quote = response.data.quote
    const author = response.data.author

    return {
        quote,
        author
    }
}

export default quoteService;
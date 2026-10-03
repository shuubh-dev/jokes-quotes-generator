import jokeService from "../api/joke.service"
import quoteService from "../api/quote.service"
import "../styles/ButtonsContainer.css"

const ButtonsContainer = ({ displayContent }) => {
    const getRandomJoke = async () => {
        const data = await jokeService();
        displayContent(data)
    }

    const getRandomQuote = async () => {
        const data = await quoteService();
        displayContent(data)
    }

  return (
    <div className="buttons-container">
      <button className="content-button" type="button" onClick={getRandomQuote}>Quotes</button>
      <button className="content-button" type="button" onClick={getRandomJoke}>Jokes</button>
    </div>
  )
}

export default ButtonsContainer
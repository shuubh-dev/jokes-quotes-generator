import jokeService from "../api/joke.service"
import quoteService from "../api/quote.service"
import "../styles/ButtonsContainer.css"

const ButtonsContainer = () => {

    const getRandomJoke = async () => {
        const data = await jokeService()
        console.log(data);
    }

    const getRandomQuote = async () => {
        const data = await quoteService();
        console.log(data);
    }

  return (
    <div className="buttons-container">
      <button className="content-button" type="button" onClick={getRandomQuote}>Quotes</button>
      <button className="content-button" type="button" onClick={getRandomJoke}>Jokes</button>
    </div>
  )
}

export default ButtonsContainer
import jokeService from "../services/joke.service"
import "../styles/ButtonsContainer.css"

const ButtonsContainer = () => {

    const getRandomJoke = async () => {
        const data = await jokeService()
        console.log(data.data);
    }

  return (
    <div className="buttons-container">
      <button className="content-button" type="button">Quotes</button>
      <button className="content-button" type="button" onClick={getRandomJoke}>Jokes</button>
    </div>
  )
}

export default ButtonsContainer
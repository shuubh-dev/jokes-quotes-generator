import ButtonsContainer from "./ButtonsContainer"
import DisplayBox from "./DisplayBox"
import "../styles/MainContainer.css"

const MainContainer = () => {
  return (
    <main className="main-container">
      <DisplayBox />
      <ButtonsContainer />
    </main>
  )
}

export default MainContainer
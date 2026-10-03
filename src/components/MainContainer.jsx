import ButtonsContainer from "./ButtonsContainer"
import DisplayBox from "./DisplayBox"
import "../styles/MainContainer.css"
import { useState } from "react"

const MainContainer = () => {
    const [content, setContent] = useState(null);

    const displayContent = (data) => {
        setContent(data)
    }

  return (
    <main className="main-container">
      <DisplayBox content={content}/>
      <ButtonsContainer displayContent={displayContent}/>
    </main>
  )
}

export default MainContainer
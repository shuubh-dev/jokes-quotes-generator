import "../styles/DisplayBox.css"

const DisplayBox = ({ content }) => {
    if(!content)
        return null;

  return (
    <section className="display-box" aria-live="polite">
        <p> {content.joke  &&  <span>{content.joke}</span>} </p>
        <p> {content.setup  &&  <span>{content.setup}</span>} </p>
        <p> {content.delivery  &&  <span>{content.delivery}</span>} </p>

        <p> {content.quote  &&  <span>{content.quote}</span>} </p>
        <p> {content.author  &&  <span>- {content.author}</span>} </p>
    </section>
  )
}

export default DisplayBox
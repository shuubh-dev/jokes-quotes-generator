import "../styles/DisplayBox.css"

const DisplayBox = ({ content }) => {

  return (
    <section className="display-box" aria-live="polite">
      <div className="display-content">
        {!content && <p className="display-text">Choose a category to get started!!!</p>}
        {content?.joke && <p className="display-text">{content.joke}</p>}
        {content?.setup && <p className="display-text">{content.setup}</p>}
        {content?.delivery && <p className="display-text">{content.delivery}</p>}
        {content?.quote && <p className="display-text">{content.quote}</p>}
        {content?.author && <p className="display-author">- {content.author}</p>}
      </div>
    </section>
  )
}

export default DisplayBox
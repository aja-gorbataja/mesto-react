
function Card(props) {
  
  function handleClick() {
    props.onCardClick(props.link, props.name);
  }

  return (
      <article className="item">
        <div className="elements__item">
          <div className="elements__item-trash"></div>
          <img src={props.link} alt={props.name} className="elements__item-img" onClick={handleClick} />
          <div className="elements__item-container">
            <h2 className="elements__item-name">{props.name}</h2>
              <div className="elements__item-like">
                <p className="elements__item-numbers">{props.likes.length}</p>
              </div>
          </div>
        </div>
      </article>
  )
}

export default Card;
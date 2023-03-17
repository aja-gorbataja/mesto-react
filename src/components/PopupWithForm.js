import React from "react";

function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.name} ${props.isOpen ? "popup_open" : ""}`}>
        <div className="popup__container">
          <button className={`popup__${props.name}-close popup-close`} aria-label={`${props.name}-close`} onClick={props.onClose}></button>
          <form name={`form-${props.name}`} action="#" className={`form form_${props.name} popup__form`} >
            <h3 className="form__title">{props.title}</h3>
            {props.children}
            <button type="submit" className="form__save popup__button" disabled>{props.button || 'Сохранить'}</button>
          </form>
        </div>
      </div>
  )
}

export default PopupWithForm
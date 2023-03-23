import React from "react";

function PopupWithForm({ name, title, isOpen, onClose, button, children, onSubmit }) {
  return (
    <div className={`popup popup_${name} ${isOpen ? "popup_open" : ""}`}>
        <div className="popup__container">
          <button className={`popup__${name}-close popup-close`} aria-label={`${name}-close`} onClick={onClose}></button>
          <form name={`form-${name}`} action="#" className={`form form_${name} popup__form`} onSubmit={onSubmit} >
            <h3 className="form__title">{title}</h3>
            {children}
            <button type="submit" className="form__save popup__button" onSubmit={onSubmit}>{button || 'Сохранить'}</button>
          </form>
        </div>
      </div>
  )
}

export default PopupWithForm
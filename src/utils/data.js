export const buttonEditOpen = document.querySelector('.profile__info-edit');
export const buttonAddOpen = document.querySelector('.profile__add');
export const inputName = document.querySelector('.form__input-name');
export const inputAbout = document.querySelector('.form__input-description');
export const inputAvatar = document.querySelector('.form__input-avatar');
export const userName = document.querySelector('.profile__info-name');
export const userAbout = document.querySelector('.profile__info-description');
export const userAvatar = document.querySelector('.profile__avatar');
export const cardsContainer = document.querySelector('.elements');

export const config = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-60',
  headers: {
    authorization: 'a7d13795-b751-49db-aed9-35354fa7b32f',
    'Content-Type': 'application/json'
  }
}

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
};
import React from "react";
import '../pages/index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup"

function App() {

  const [ isEditProfilePopupOpen, setIsEditProfilePopupOpen ] = React.useState(false);
  const [ isAddPlacePopupOpen, setIsAddPlacePopupOpen ] = React.useState(false);
  const [ isEditAvatarPopupOpen, setIsEditAvatarPopupOpen ] = React.useState(false);
  const [ selectedCard, setSelectedCard ] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(link, name) {
    setSelectedCard({
      link: link,
      name: name
    });
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <fieldset className="form__input">
          <input id="username" type="text" name="name" className="form__input-name popup__input" placeholder="Имя" />
          <span className="username-error popup__input-error"></span>
          <input id="description" name="about" type="text" className="form__input-description popup__input" placeholder="О себе" />
          <span className="description-error popup__input-error"></span>
          </fieldset>
      </PopupWithForm>
      <PopupWithForm name="add" title="Новое место" button="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <fieldset className="form__input">
          <input id="cityname" name="name" type="text" className="form__input-city popup__input" placeholder="Название" />
          <span className="cityname-error popup__input-error"></span>
          <input id="imagelink" name="link" type="url" className="form__input-link popup__input" placeholder="Ссылка на картинку" />
          <span className="imagelink-error popup__input-error"></span>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <fieldset className="form__input">
          <input id="avatarlink" name="avatar" type="url" className="form__input-avatar popup__input" placeholder="Ссылка на картинку" />
          <span className="avatarlink-error popup__input-error"></span>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm name="ask" title="Вы уверены?" button="Да" onClose={closeAllPopups} />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;

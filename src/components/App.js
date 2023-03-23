
import {useEffect, useState} from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {

  const [ isEditProfilePopupOpen, setIsEditProfilePopupOpen ] = useState(false);
  const [ isAddPlacePopupOpen, setIsAddPlacePopupOpen ] = useState(false);
  const [ isEditAvatarPopupOpen, setIsEditAvatarPopupOpen ] = useState(false);
  const [ selectedCard, setSelectedCard ] = useState({});
  const [ currentUser, setCurrentUser ] = useState({});
  const [ cards, setCards ] = useState([]);

  useEffect(() => {
    api.getCards()
          .then((cards) => {
            setCards(cards)
          })
          .catch((err) => {
            console.log(err)
          })
      
  }, [])

  useEffect(() => {
    api.getOwnerInfo()
      .then((data) => {
        setCurrentUser(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  function handleUpdateUser(newUser) {
    api.editProfile(newUser)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function handleUpdateAvatar(newAvatar) {
    api.editAvatar(newAvatar)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function handleAddPlaceSubmit(newCard) {
    api.createCard(newCard)
      .then((data) => {
        setCards([data, ...cards]);
        closeAllPopups()
      })
      .catch((err) => {
        console.log(err)
      })
  }

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

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
  
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => {
        console.log(err)
      })
  } 

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards((cards) => cards.filter(elem => elem._id !== card._id))
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header />
      <Main cards={cards} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
      <Footer />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} /> 
      <PopupWithForm name="ask" title="Вы уверены?" button="Да" onClose={closeAllPopups} />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

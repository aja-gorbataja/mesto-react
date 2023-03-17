import React from "react";
import {useEffect, useState} from 'react';
import { api } from "../utils/Api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  
  const [ userName, setUserName ] = useState("");
  const [ userDescription, setUserDescription ] = useState("");
  const [ userAvatar, setUserAvatar] = useState("");
  const [ cards, setCards ] = useState([])

  useEffect(() => {
    api.getOwnerInfo()
      .then((data) => {
        setUserName(data.name)
        setUserDescription(data.about)
        setUserAvatar(data.avatar)
      })
      .then(() => {
        api.getCards()
          .then((cards) => {
            setCards(cards)
          })
          .catch((err) => {
            console.log(err)
          })
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <main className="content">
        <section className="profile">
          <div onClick={onEditAvatar} className="profile__edit">
            <img src={userAvatar} alt="Аватар" className="profile__avatar"/>
          </div>
          <div className="profile__info">
            <div className="profile__container">
              <h1 className="profile__info-name">{userName}</h1>
              <button onClick={onEditProfile} className="profile__info-edit" aria-label="edit"></button>
            </div>
            <p className="profile__info-description">{userDescription}</p>
          </div>
          <button onClick={onAddPlace} className="profile__add" aria-label="add"></button>
        </section>
        <section className="elements">
        {cards.map((card) => (
          <Card key={card._id} name={card.name} link={card.link} likes={card.likes} onCardClick={onCardClick} />
        ))}
        </section>  
      </main>
  )
}

export default Main;
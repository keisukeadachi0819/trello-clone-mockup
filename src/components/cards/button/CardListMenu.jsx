import React from 'react'

export const CardListMenu = ({cardLists, setCardLists, cardList}) => {

  const handleDelete = (id) => {
    setCardLists(cardLists.filter((cardList) => cardList.id !== id));
  }

  return (
    <div className='card-list-menu'>
      <button
        className='card-list-menu-btn'
        onClick={() => handleDelete(cardList.id)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
    </div>
  )
}

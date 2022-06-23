import React, { useState } from 'react'

export const CardListTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [cardTitle, setCardTitle] = useState("タイトル");
  
  const handleClicked = () => {
    setIsClicked(true);
  }

  const handleChange = (e) => {
    setCardTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClicked(false);
  }

  const handleBlur = () => {
    setIsClicked(false);
  }

  return (
    <div 
      className='card-list-title'
      onClick={handleClicked}
    >
      <div className='card-list-title-wrapper'>
      {isClicked ? (
        <form className='card-list-input-title-form' onSubmit={handleSubmit}>
          <input className='card-list-input-title' type="text" onChange={handleChange} onBlur={handleBlur} value={cardTitle} autoFocus />
        </form>
      ) : (
        <h2 className='card-list-tile'>{cardTitle}</h2>
      )}
      </div>
    </div>
  )
}

import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export const AddCardList = ({cardLists, setCardLists}) => {

  const handleAddCardList = () => {
    const cardListId = uuidv4();

    setCardLists([
      ...cardLists,
      {
        id: cardListId,
        draggableId: `card-list-${cardListId}`
      }
    ])
  }

  return (
    <div className='add-list'>
      <button 
        className='add-list-btn'
        onClick={handleAddCardList}
      >
        もう一つリストを追加
      </button>
    </div>
  )
}

import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { AddCardList } from '../cards/button/AddCardList'
import { CardList } from '../cards/CardList'

export const Board = () => {

  const firstCardListUuid = uuidv4();

  const [cardLists, setCardLists] = useState([
    {
      id: firstCardListUuid,
      draggableId: `card-list-${firstCardListUuid}`,
    }
  ]);

  return (
    <div className='board-wrapper'>
      <div className='board-inner'>
        <div className='board'>
          {cardLists.map((cardList) => (
            <CardList key={cardList.id} />
          ))}
            <AddCardList
              cardLists={cardLists}
              setCardLists={setCardLists}
            />
        </div>
      </div>
    </div>
  )
}

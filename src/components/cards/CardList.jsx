import React, { useState } from 'react';
import { CardListTitle } from './CardListTitle';
import { CardListMenu } from './button/CardListMenu';
import { AddCard } from './button/AddCard';
import { Cards } from './Cards';
import { Draggable } from 'react-beautiful-dnd';

export const CardList = ({cardLists, setCardLists, cardList, index}) => {
  const [cardTitle, setCardTitle] = useState("");
  const [cards, setCards] = useState([]);

  return (
    <Draggable 
      draggableId={cardList.id}
      index={index}
    >
      {(provided) => (
        <div 
          className='card-list-wrapper'
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div className='card-list' {...provided.dragHandleProps}>
            <div className='card-list-header'>
              <CardListTitle />
              <CardListMenu 
                cardLists={cardLists}
                setCardLists={setCardLists}
                cardList={cardList}
              />
            </div>
            <div className='list-cards'>
              <Cards cardTitle={cardTitle} cards={cards} setCards={setCards} />
            </div>
            <AddCard
              cardTitle={cardTitle}
              setCardTitle={setCardTitle}
              cards={cards}
              setCards={setCards}
            />
          </div>
        </div>
      )}
    </Draggable>
  )
}

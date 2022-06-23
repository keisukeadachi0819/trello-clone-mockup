import React, { useState } from 'react';
import { CardListTitle } from './CardListTitle';
import { CardListMenu } from './button/CardListMenu';
import { AddCard } from './button/AddCard';
import { Cards } from './Cards';
import { Draggable } from 'react-beautiful-dnd';

export const CardList = ({cardLists, setCardLists, cardList, index}) => {
  const [cardTitle, setCardTitle] = useState("");
  const [cards, setCards] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  }

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
              <div 
                className='card-list-menu'
                onClick={handleClick}
              >
                <button className='card-list-menu-btn'>
                  <i className="fa-solid fa-ellipsis"></i>
                </button>
              </div>
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

          <CardListMenu 
            cardLists={cardLists}
            setCardLists={setCardLists}
            cardList={cardList}
            isClicked={isClicked}
            setIsClicked={setIsClicked}
          />
        </div>
      )}
    </Draggable>
  )
}

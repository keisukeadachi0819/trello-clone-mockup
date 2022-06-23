import React, { useState } from 'react';
import { CardListTitle } from './CardListTitle';
import { CardListMenu } from './button/CardListMenu';
import { AddCard } from './button/AddCard';
import { Cards } from './Cards';

export const CardList = () => {
  const [cardTitle, setCardTitle] = useState("");
  const [cards, setCards] = useState([]);

  return (
    <div className='card-list-wrapper'>
      <div className='card-list'>
        <div className='card-list-header'>
          <CardListTitle />
          <CardListMenu />
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
  )
}

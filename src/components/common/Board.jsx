import React, { useState } from 'react'
import { Droppable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';
import { AddCardList } from '../cards/button/AddCardList'
import { CardList } from '../cards/CardList'

const reorder = (cardLists, start, end) => {
  const draggedCard = cardLists.splice(start, 1);
  cardLists.splice(end, 0, draggedCard[0]);
}

export const Board = () => {

  const firstCardListUuid = uuidv4();

  const [cardLists, setCardLists] = useState([
    {
      id: firstCardListUuid,
      draggableId: `card-list-${firstCardListUuid}`,
    }
  ]);

  const handleDragEnd = (e) => {
    reorder(cardLists, e.source.index, e.destination.index,)
  }

  return (
    <div className='board-wrapper'>
      <div className='board-inner'>
        <div className='board'>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable
              droppableId='droppable'
              direction='horizontal'
            >
            {(provided) => (
              <div 
                className='card-lists'
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {cardLists.map((cardList, index) => (
                  <CardList 
                    key={cardList.id}
                    index={index}
                    cardLists={cardLists}
                    setCardLists={setCardLists}
                    cardList={cardList}
                  />
                ))}
                  <AddCardList
                    cardLists={cardLists}
                    setCardLists={setCardLists}
                  />
                {provided.placeholder}
              </div>
            )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </div>
  )
}

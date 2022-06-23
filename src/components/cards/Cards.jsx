import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { DragDropContext } from 'react-beautiful-dnd'
import { Card } from './Card'

const reorder = (cards, start, end) => {
  const draggedCard = cards.splice(start, 1);
  cards.splice(end, 0, draggedCard[0]);
}

export const Cards = ({cards, setCards}) => {
  const handleDragEnd = (e) => {
    reorder(cards, e.source.index, e.destination.index);
    setCards(cards);
  }

  return (
    <div className='cards'>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='droppable'>
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {cards.map((card, index) => (
                <div className='card-wrapper' key={card.id}>
                  <Card
                    index={index}
                    card={card}
                    cards={cards}
                    setCards={setCards}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
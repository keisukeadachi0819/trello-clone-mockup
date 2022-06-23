import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

export const Card = ({ card, cards, setCards, index }) => {
    const handleDelete = (id) => {
        setCards(cards.filter((card) => card.id !== id));
    } 

    return (
        <Draggable index={index} draggableId={card.draggableId}>
            {(provided) => (
                <div 
                    className='card' 
                    key={card.id} 
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <h3 className='card-title'>{card.title}</h3>
                    <div className='card-edit'>
                        <button onClick={() => handleDelete(card.id)}>
                            <i className="fa-solid fa-pen"></i>
                        </button>
                    </div>
                </div>
            )}
        </Draggable>
    )
}

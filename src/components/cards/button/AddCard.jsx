import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export const AddCard = ({cardTitle, setCardTitle, cards, setCards}) => {

    const handleSubmit = (e) => {
        const cardId = uuidv4();
        e.preventDefault();
        if (cardTitle === "") {
            return;
        }
        setCards([
            ...cards, 
            {
                id: cardId,
                draggableId: `card-${cardId}`,
                title: cardTitle,
            }
        ]);
        setCardTitle("");
    }

    const handleChange = (e) => {
        setCardTitle(e.target.value);
    }

    return (
    <div className='add-card-wrapper'>
        <form onSubmit={handleSubmit}>
            <input className='add-card-input' type="text" onChange={handleChange} placeholder='カードを追加' value={cardTitle} autoFocus />
        </form>
    </div>
    )
}

import React from 'react'

export const CardListMenu = ({cardLists, setCardLists, cardList, isClicked, setIsClicked}) => {

  const handleCloseMenuOutside = (e, setIsClicked) => {
    if (e.target === e.currentTarget) {
      setIsClicked(!isClicked);
    }
  }

  const handleCloseMenu = () => {
    setIsClicked(!isClicked);
  }

  const handleDelete = (id) => {
    setCardLists(cardLists.filter((cardList) => cardList.id !== id));
  }

  return (
    <div 
      className={`pop-over-menu ${isClicked ? 'active' : 'inactive'}`}
      onClick={(e) => {handleCloseMenuOutside(e, setIsClicked)}}
    >
      <div className='pop-over-header-title'>
        <span>リスト操作</span>
        <button 
          className='close-pop-over-menu'
          onClick={handleCloseMenu}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <ul className='pop-over-menu-items'>
        <li>
          <button
            className=''
            onClick={() => handleDelete(cardList.id)}
          >
            リストを削除する
          </button>
        </li>
      </ul>
    </div>
  )
}

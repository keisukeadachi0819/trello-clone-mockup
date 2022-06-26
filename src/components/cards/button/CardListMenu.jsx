import React, { useEffect, useRef, useState } from 'react'

export const CardListMenu = ({cardLists, setCardLists, cardList}) => {
  const [isShown, setIsShown] = useState(false);
  const popupRef = useRef();
  const toggleButtonRef = useRef();

  useEffect(() => {
    // 対象の要素を取得
    const popupElement = popupRef.current;
    const toggleButtonElement = toggleButtonRef.current;

    // クリックした時に実行する関数
    const handleClickOutside = (e) => {
      if (!popupElement.contains(e.target) && !toggleButtonElement.contains(e.target)) {
        setIsShown(false);
      } 
    };

    // クリックイベントを設定
    document.addEventListener('click', handleClickOutside);

    // クリーンアップ関数
    return () => {
      // コンポーネントがアンマウント、再レンダリングされた時にクリックイベントを削除
      document.removeEventListener('click', handleClickOutside);
    }

  }, [popupRef, setIsShown]);

  const handleToggleButton = () => {
    if (isShown) {
      setIsShown(false);
    } else {
      setIsShown(true);
    }
  }

  const handleCloseButton = () => {
    setIsShown(false);
  }

  const handleDelete = (id) => {
    setCardLists(cardLists.filter((cardList) => cardList.id !== id));
  }

  return (
    <div>
      <button className='card-list-menu-btn' onClick={handleToggleButton} ref={toggleButtonRef}>
        <i className="fa-solid fa-ellipsis"></i>
      </button>
      <div className={`pop-over-menu ${isShown ? 'active' : ''}`} ref={popupRef}>
        <div className='pop-over-header-title'>
          <span>リスト操作</span>
          <button className='close-pop-over-menu' onClick={handleCloseButton}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <ul className='pop-over-menu-items'>
          <li>
            <button onClick={() => handleDelete(cardList.id)}>
              リストを削除する
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

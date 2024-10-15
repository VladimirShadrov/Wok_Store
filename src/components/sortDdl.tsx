import React from 'react';

const SortDDL = () => {
  const listItems = ['Популярности (ASC)', 'Популярности (DESC)', 'Цене (ASC)', 'Цене (DESC)', 'Алфавиту (ASC)', 'Алфавиту (DESC)'];
  const [activeIndex, setActiveIndex] = React.useState(1);
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);

  const onMenuItemClick = (index: number) => {
    setActiveIndex(index);
    hideMenu();
  };

  const hideMenu = () => {
    setIsMenuVisible(false);
  };

  return (
    <div className={isMenuVisible ? 'sort-ddl active' : 'sort-ddl'} data-active-class="active">
      <span>Сортировать по:</span>
      <div className="ddl-container">
        <span onClick={() => setIsMenuVisible(!isMenuVisible)} className="selected-value">
          {listItems[activeIndex]}
        </span>
        <div className="ddl-list">
          {listItems.map((item, index) => (
            <div key={index} onClick={() => onMenuItemClick(index)} className={index === activeIndex ? 'ddl-list__item active' : 'ddl-list__item'}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortDDL;

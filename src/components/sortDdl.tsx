import React from 'react';

const SortDDL = () => {
  const listItems = ['Популярности (ASC)', 'Популярности (DESC)', 'Цене (ASC)', 'Цене (DESC)', 'Алфавиту (ASC)', 'Алфавиту (DESC)'];
  const [activeIndex, setActiveIndex] = React.useState(1);
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);
  const dropdownListElement = React.useRef<HTMLDivElement>(null);

  const onMenuItemClick = (index: number) => {
    setActiveIndex(index);
    hideMenu();
  };

  const hideMenu = () => {
    setIsMenuVisible(false);
  };

  const onDocumenClick = React.useCallback(
    (event: MouseEvent) => {
      const targetElement = event.target as HTMLElement;

      if (isMenuVisible && dropdownListElement.current && !dropdownListElement.current?.contains(targetElement)) {
        hideMenu();
      }
    },
    [isMenuVisible]
  );

  React.useEffect(() => {
    document.addEventListener('click', onDocumenClick);

    return () => document.removeEventListener('click', onDocumenClick);
  }, [onDocumenClick]);

  return (
    <div className={isMenuVisible ? 'sort-ddl active' : 'sort-ddl'} data-active-class="active">
      <span>Сортировать по:</span>
      <div className="ddl-container">
        <span
          onClick={(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
            event.stopPropagation();
            setIsMenuVisible((prev) => !prev);
          }}
          className="selected-value">
          {listItems[activeIndex]}
        </span>
        <div ref={dropdownListElement} className="ddl-list">
          {listItems.map((item, index) => (
            <div key={item} onClick={() => onMenuItemClick(index)} className={index === activeIndex ? 'ddl-list__item active' : 'ddl-list__item'}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortDDL;

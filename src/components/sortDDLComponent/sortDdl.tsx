import React from 'react';
import styles from './sortDdl.module.scss';

const SortDDL = () => {
  const listItems = ['Популярности ↑', 'Популярности ↓', 'Цене ↑', 'Цене ↓', 'Алфавиту ↑', 'Алфавиту ↓'];
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
    <div className={isMenuVisible ? `${styles.sortDdl} ${styles.active}` : styles.sortDdl} data-active-class="active">
      <span>Сортировать по:</span>
      <div className={styles.ddlContainer}>
        <span
          onClick={(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
            event.stopPropagation();
            setIsMenuVisible((prev) => !prev);
          }}
          className={styles.selectedValue}>
          {listItems[activeIndex]}
        </span>
        <div ref={dropdownListElement} className={styles.ddlList}>
          {listItems.map((item, index) => (
            <div
              key={item}
              onClick={() => onMenuItemClick(index)}
              className={index === activeIndex ? `${styles.ddlListItem} ${styles.active}` : styles.ddlListItem}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortDDL;

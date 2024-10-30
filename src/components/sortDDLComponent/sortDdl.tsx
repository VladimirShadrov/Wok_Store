import React, { useEffect } from 'react';
import styles from './sortDdl.module.scss';

type SortType = {
  type: string;
  direction: string;
  directionIcon: string;
};

type SortDDLProps = { sortProducts: (sortType: SortType) => void };

const SortDDL = ({ sortProducts }: SortDDLProps) => {
  const listItems = [
    { type: 'Популярности', direction: 'asc', directionIcon: ' ↑' },
    { type: 'Популярности', direction: 'desc', directionIcon: ' ↓' },
    { type: 'Цене', direction: 'asc', directionIcon: ' ↑' },
    { type: 'Цене', direction: 'desc', directionIcon: ' ↓' },
    { type: 'Алфавиту', direction: 'asc', directionIcon: ' ↑' },
    { type: 'Алфавиту', direction: 'desc', directionIcon: ' ↓' },
  ];
  const [activeIndex, setActiveIndex] = React.useState(1);
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);
  const dropdownListElement = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    sortProducts(listItems[activeIndex]);
  }, [activeIndex]);

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
          {listItems[activeIndex].type}
          {listItems[activeIndex].directionIcon}
        </span>
        <div ref={dropdownListElement} className={styles.ddlList}>
          {listItems.map((item, index) => (
            <div
              key={index}
              onClick={() => onMenuItemClick(index)}
              className={index === activeIndex ? `${styles.ddlListItem} ${styles.active}` : styles.ddlListItem}>
              {item.type}
              {item.directionIcon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortDDL;

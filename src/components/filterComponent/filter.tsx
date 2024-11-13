import React from 'react';
import styles from './filter.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterCategory } from '../../store/slices/filterSlice';
import { RootState } from '../../store/store';

type FilterType = {
  name: string;
  filterKey: string;
};

const Filter = () => {
  const filterCategory = useSelector((state: RootState) => state.filter.filterCategory);
  const menuItemRefs = React.useRef<HTMLDivElement[]>([]);
  const floatingNavElement = React.useRef<HTMLDivElement>(null);
  const menuItems: FilterType[] = [
    { name: 'Все', filterKey: 'category' },
    { name: 'Гречневая', filterKey: 'category' },
    { name: 'Пшеничная', filterKey: 'category' },
    { name: 'Яичная', filterKey: 'category' },
    { name: 'Тяханы', filterKey: 'category' },
    { name: 'Фунчозы', filterKey: 'category' },
  ];
  const [activeMenuItemIndex, setActiveMenuItemIndex] = React.useState(getIndex());
  const dispatch = useDispatch();

  function getIndex() {
    const index = menuItems.findIndex((item) => item.name === filterCategory.name);
    return index > -1 ? index : 0;
  }

  const onMenuItemClick = (index: number) => {
    setActiveMenuItemIndex(index);

    if (floatingNavElement.current) {
      floatingNavElement.current.style.top = `${menuItemRefs.current[index].offsetTop}px`;
      floatingNavElement.current.style.left = `${menuItemRefs.current[index].offsetLeft}px`;
      floatingNavElement.current.style.width = `${menuItemRefs.current[index].offsetWidth}px`;
    }
  };

  React.useEffect(() => {
    dispatch(setFilterCategory(menuItems[activeMenuItemIndex]));
  }, [activeMenuItemIndex]);

  React.useEffect(() => {
    const index = getIndex();

    if (index > -1) {
      onMenuItemClick(index);
    }
  }, []);

  return (
    <nav className={styles.navWrapper}>
      {menuItems.map((item, index) => (
        <div
          key={index}
          ref={(el: HTMLDivElement) => (menuItemRefs.current[index] = el)}
          onClick={() => onMenuItemClick(index)}
          className={activeMenuItemIndex === index ? `${styles.navItem} ${styles.active}` : styles.navItem}>
          {item.name}
        </div>
      ))}
      <div ref={floatingNavElement} className={styles.navItemActive}></div>
    </nav>
  );
};

export default Filter;

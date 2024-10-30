import React from 'react';
import Header from '../../components/headerComponent/header';
import NavSortPanel from '../../components/navSortPanelComponent/navSortPanel';
import ProductList from '../../components/productListComponent/productList';
import styles from './mainPage.module.scss';

type SortType = {
  type: string;
  direction: string;
  directionIcon: string;
};

const MainPage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('Все');
  const [sortDirection, setSortDirection] = React.useState<SortType>({ type: 'Популярности', direction: 'desc', directionIcon: ' ↓' });

  return (
    <>
      <Header />
      <NavSortPanel
        selectCategory={(category: string) => setSelectedCategory(category)}
        sortProducts={(sortData: SortType) => setSortDirection(sortData)}
      />
      <h1 className={styles.mainTitle}>WOK {selectedCategory}</h1>
      <ProductList />
    </>
  );
};

export default MainPage;

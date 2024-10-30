import React from 'react';
import Header from '../../components/headerComponent/header';
import NavSortPanel from '../../components/navSortPanelComponent/navSortPanel';
import ProductList from '../../components/productListComponent/productList';
import styles from './mainPage.module.scss';

type FilterType = {
  name: string;
  filterKey: string;
};

type SortType = {
  type: string;
  direction: string;
  directionIcon: string;
  sortKey: string;
};

const MainPage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<FilterType>({
    name: 'Все',
    filterKey: 'category',
  });
  const [sortDirection, setSortDirection] = React.useState<SortType>({
    type: 'Популярности',
    direction: 'desc',
    directionIcon: ' ↓',
    sortKey: 'ratio',
  });

  return (
    <>
      <Header />
      <NavSortPanel
        selectCategory={(category: FilterType) => setSelectedCategory(category)}
        sortProducts={(sortData: SortType) => setSortDirection(sortData)}
      />
      <h1 className={styles.mainTitle}>WOK {selectedCategory.name}</h1>
      <ProductList />
    </>
  );
};

export default MainPage;

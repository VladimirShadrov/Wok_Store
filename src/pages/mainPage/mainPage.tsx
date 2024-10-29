import { useState } from 'react';
import Header from '../../components/headerComponent/header';
import NavSortPanel from '../../components/navSortPanelComponent/navSortPanel';
import ProductList from '../../components/productListComponent/productList';
import styles from './mainPage.module.scss';

const MainPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');

  return (
    <>
      <Header />
      <NavSortPanel selectCategory={(category: string) => setSelectedCategory(category)} />
      <h1 className={styles.mainTitle}>WOK {selectedCategory}</h1>
      <ProductList />
    </>
  );
};

export default MainPage;

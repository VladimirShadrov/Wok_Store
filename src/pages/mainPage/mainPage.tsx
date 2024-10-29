import Header from '../../components/headerComponent/header';
import NavSortPanel from '../../components/navSortPanelComponent/navSortPanel';
import ProductList from '../../components/productListComponent/productList';
import styles from './mainPage.module.scss';

const MainPage = () => {
  return (
    <>
      <Header />
      <NavSortPanel />
      <h1 className={styles.mainTitle}>WOK Пшеничная</h1>
      <ProductList />
    </>
  );
};

export default MainPage;

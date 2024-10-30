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
  order: string;
  directionIcon: string;
  sortKey: string;
};

type WokItemType = {
  id: number;
  title: string;
  weight: number;
  price: number;
  imgSmall: string;
  imgBig: string;
  ingridients: string[];
  nutritionalValue: { [key: string]: string | number }[];
  description: string;
  category: string;
  ratio: number;
};

const MainPage = () => {
  const [filterCategory, setFilterCategory] = React.useState<FilterType>({
    name: 'Все',
    filterKey: 'category',
  });
  const [sortData, setSortData] = React.useState<SortType>({
    type: 'Популярности',
    order: 'desc',
    directionIcon: ' ↓',
    sortKey: 'ratio',
  });
  const [productList, setProductList] = React.useState<WokItemType[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const filterParams = `${filterCategory.name === 'Все' ? '' : filterCategory.filterKey + '=' + filterCategory.name}`;
  const URL = `https://670f90c63e71518616587ae2.mockapi.io/categories?${filterParams}&sortBy=${sortData.sortKey}&order=${sortData.order}
  `;

  React.useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await fetch(URL);

        if (response.ok) {
          const data = await response.json();
          const myWokArray = data;
          setProductList(myWokArray);
          setIsLoading(false);
        } else {
          console.error(`Ошибка получения данных с сервера. Статус запроса: ${response.status}`);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [filterCategory, sortData]);

  return (
    <>
      <Header />
      <NavSortPanel
        selectCategory={(category: FilterType) => setFilterCategory(category)}
        sortProducts={(sortData: SortType) => setSortData(sortData)}
      />
      <h1 className={styles.mainTitle}>WOK {filterCategory.name}</h1>
      <ProductList productListData={productList} isLoading={isLoading} />
    </>
  );
};

export default MainPage;

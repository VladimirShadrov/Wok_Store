import React from 'react';
import Header from '../../components/headerComponent/header';
import ProductList from '../../components/productListComponent/productList';
import styles from './mainPage.module.scss';
import { WokContext } from '../../context/wokContext';
import { ScrollRestoration } from 'react-router-dom';
import FilterSortPanel from '../../components/filterSortPanelComponent/filterSortPanel';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { setProductList } from '../../store/slices/productSlice';

type SortType = {
  type: string;
  order: string;
  directionIcon: string;
  sortKey: string;
};

type FoodValueType = {
  text: string;
  value: number;
};

type WokItemType = {
  id: number;
  title: string;
  weight: number;
  price: number;
  imgSmall: string;
  imgBig: string;
  ingridients: string[];
  nutritionalValue: FoodValueType[];
  description: string;
  category: string;
  count: number;
  ratio: number;
};

const MainPage = () => {
  const filterCategory = useSelector((state: RootState) => state.filter.filterCategory);
  const { productList, productsWithChangedCounters } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  const [sortData, setSortData] = React.useState<SortType>({
    type: 'Популярности',
    order: 'desc',
    directionIcon: ' ↓',
    sortKey: 'ratio',
  });
  const [filtredProductList, setFiltredProductList] = React.useState<WokItemType[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const { searchValue } = React.useContext(WokContext);

  const filterParams = `${filterCategory.name === 'Все' ? '' : filterCategory.filterKey + '=' + filterCategory.name}`;
  const URL = `https://670f90c63e71518616587ae2.mockapi.io/categories?${filterParams}&sortBy=${sortData.sortKey}&order=${sortData.order}
  `;

  React.useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await fetch(URL);

        if (response.ok) {
          const wokDataArray = await response.json();

          if (productsWithChangedCounters.length) {
            productsWithChangedCounters.forEach((product) => {
              const productIndex = wokDataArray.findIndex((wokData: WokItemType) => wokData.id === product.id);
              if (productIndex > -1) {
                wokDataArray[productIndex].count = product.count;
              }
            });
          }

          dispatch(setProductList(wokDataArray));
          setIsLoading(false);
        } else {
          console.error(`Ошибка получения данных с сервера. Статус запроса: ${response.status}`);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [filterCategory, sortData]);

  React.useEffect(() => {
    const filtredProducts = [...productList].filter((product) => product.title.toLowerCase().includes(searchValue.toLowerCase()));
    setFiltredProductList(filtredProducts);
  }, [searchValue, productList]);

  return (
    <>
      <ScrollRestoration />
      <Header />
      <FilterSortPanel sortProducts={(sortData: SortType) => setSortData(sortData)} />
      <h1 className={styles.mainTitle}>WOK {filterCategory.name}</h1>
      <ProductList productListData={searchValue.length ? filtredProductList : productList} isLoading={isLoading} />
    </>
  );
};

export default MainPage;

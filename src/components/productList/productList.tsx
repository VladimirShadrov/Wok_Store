import ProductListItem from '../productListItem/productListItem';
import WokSceleton from '../sceleton';
import React from 'react';
import styles from './productList.module.scss';

const URL = 'https://670f90c63e71518616587ae2.mockapi.io/categories';

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
};

const ProductList = () => {
  const [wokData, setWokData] = React.useState<WokItemType[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const response = await fetch(URL);

        if (response.ok) {
          const data = await response.json();
          const myWokArray = data[0];
          setWokData(myWokArray);
          setIsLoading(false);
        } else {
          console.error(`Ошибка получения данных с сервера. Статус запроса: ${response.status}`);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className={styles.wokList}>
      {isLoading
        ? [...new Array(8)].map((_, index) => <WokSceleton key={index} />)
        : wokData.map((wokItem) => <ProductListItem key={wokItem.id} {...wokItem} />)}
    </div>
  );
};

export default ProductList;

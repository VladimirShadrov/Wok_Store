import ProductListItem from './productListItem';
import React from 'react';

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

  React.useEffect(() => {
    (async () => {
      try {
        const response = await fetch(URL);

        if (response.ok) {
          const data = await response.json();
          const myWokArray = data[0];
          setWokData(myWokArray);
        } else {
          console.error(`Ошибка получения данных с сервера. Статус запроса: ${response.status}`);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="wok-list">
      {wokData.map((wokItem) => (
        <ProductListItem key={wokItem.id} {...wokItem} />
      ))}
    </div>
  );
};

export default ProductList;

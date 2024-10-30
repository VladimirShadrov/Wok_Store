import ProductListItem from '../productListItemComponent/productListItem';
import WokSceleton from '../productListSceleton/sceleton';
import React from 'react';
import styles from './productList.module.scss';

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

type ProductListProps = {
  productListData: WokItemType[];
  isLoading: boolean;
};

const ProductList = ({ productListData, isLoading }: ProductListProps) => {
  return (
    <>
      <div className={styles.wokList}>
        {isLoading
          ? [...new Array(8)].map((_, index) => <WokSceleton key={index} />)
          : productListData.map((wokItem) => <ProductListItem key={wokItem.id} {...wokItem} />)}
      </div>
      {!productListData.length && <h2 className={styles.notFound}>По заданным критериям поиска ничего не найдено</h2>}
    </>
  );
};

export default ProductList;

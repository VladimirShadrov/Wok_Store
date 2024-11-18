import { Link } from 'react-router-dom';
import Counter from '../counterComponent/counter';
import styles from './productListItem.module.scss';
import { useDispatch } from 'react-redux';
import { setProductCount, setProductPageData, setProductsListWithChangedCounters } from '../../store/slices/productSlice';
import React from 'react';

type FoodValueType = {
  text: string;
  value: number;
};

type ProductDataType = {
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

type ProductType = {
  productData: ProductDataType;
};

const ProductListItem = ({ productData }: ProductType) => {
  const { id, title, imgSmall, ingridients, weight, price, count } = productData;
  const [totalWeight, setTotalWeight] = React.useState(weight);
  const [totalPrice, setTotalPrice] = React.useState(price);
  const dispatchProductData = useDispatch();

  const onCounterChange = (count: number) => {
    setTotalWeight(weight * count);
    setTotalPrice(price * count);

    dispatchProductData(setProductCount({ id, count }));
    dispatchProductData(setProductsListWithChangedCounters());
  };

  const onLinkClick = () => {
    sessionStorage.setItem('productPageId', id.toString());
    dispatchProductData(setProductPageData(id));
  };

  return (
    <div className={styles.wokItem}>
      <Link to={`/product`} onClick={onLinkClick}>
        <div className={styles.linkContainer}>
          <div className={styles.image}>
            <img src={imgSmall} alt="image" />
            <div className={styles.ingridients}>{ingridients.map((ingridient: string) => ingridient).join(', ')}</div>
          </div>
          <h4 className={styles.title}>{title}</h4>
        </div>
      </Link>
      <div className={styles.priceWrapper}>
        <Counter callback={onCounterChange} initialCount={count} />
        <div className={styles.price}>
          <div className={styles.weight}>{totalWeight.toLocaleString()} г</div>
          <div className={styles.priceValue}>{totalPrice.toLocaleString()} ₽</div>
        </div>
      </div>
      <button className={styles.toCartBtn}>в корзину</button>
    </div>
  );
};

export default ProductListItem;

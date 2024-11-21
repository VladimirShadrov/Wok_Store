import React from 'react';
import Counter from '../counterComponent/counter';
import styles from './orderListItem.module.scss';
import { useDispatch } from 'react-redux';
import { removeProductFromCart, updateProductCountAndPrice } from '../../store/slices/cartSlice';
import { setProductCount, setProductsListWithChangedCounters } from '../../store/slices/productSlice';

interface FoodValueInterface {
  text: string;
  value: number;
}

interface ProductInterface {
  id: number;
  title: string;
  weight: number;
  price: number;
  imgSmall: string;
  imgBig: string;
  ingridients: string[];
  nutritionalValue: FoodValueInterface[];
  description: string;
  category: string;
  count: number;
  ratio: number;
}

const OrderListItem = ({ id, price, count, imgSmall, title }: ProductInterface) => {
  const [totalPrice, setTotalPrice] = React.useState(price);
  const dispatch = useDispatch();

  const onCounterChange = (count: number) => {
    setTotalPrice(price * count);
    dispatch(updateProductCountAndPrice({ id, count }));
    dispatch(setProductCount({ id, count }));
    dispatch(setProductsListWithChangedCounters());
  };

  const onDeleteBtnClick = () => {
    dispatch(removeProductFromCart(id));
  };

  React.useEffect(() => {
    setTotalPrice(price * count);
  }, []);

  return (
    <div className={styles.orderItem}>
      <div className={styles.productInfo}>
        <div className={styles.itemImage}>
          <img src={imgSmall} alt="image" />
        </div>
        <p className={styles.title}>{title}</p>
      </div>
      <Counter callback={onCounterChange} initialCount={count} />
      <div className={styles.itemPrice}>{totalPrice.toLocaleString()} ₽</div>
      <button onClick={onDeleteBtnClick} className={styles.deleteBtn} title="Удалить">
        +
      </button>
    </div>
  );
};

export default OrderListItem;

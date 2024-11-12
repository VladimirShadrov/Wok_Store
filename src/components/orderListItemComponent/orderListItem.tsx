import React from 'react';
import Counter from '../counterComponent/counter';
import styles from './orderListItem.module.scss';

const OrderListItem = () => {
  const price = 369;
  const [totalPrice, setTotalPrice] = React.useState(price);

  const onCounterChange = (count: number) => {
    setTotalPrice(price * count);
  };

  return (
    <div className={styles.orderItem}>
      <div className={styles.itemImage}>
        <img src="images/products/1-300.jpg" alt="image" />
      </div>
      <Counter callback={onCounterChange} />
      <div className={styles.itemPrice}>{totalPrice.toLocaleString()} ₽</div>
      <button className={styles.deleteBtn} title="Удалить">
        +
      </button>
    </div>
  );
};

export default OrderListItem;

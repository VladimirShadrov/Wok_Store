import { Link } from 'react-router-dom';
import OrderListItem from '../orderListItemComponent/orderListItem';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterCategory } from '../../store/slices/filterSlice';
import { clearCart, setTotalPapams } from '../../store/slices/cartSlice';
import { RootState } from '../../store/store';
import styles from './fullCart.module.scss';
import React from 'react';
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

const FullCart = () => {
  const dispatch = useDispatch();
  const { totalCount, totalPrice, products } = useSelector((store: RootState) => store.cart);

  const onMainPageLinkClick = () => {
    dispatch(setFilterCategory({ name: 'Все', filterKey: 'category' }));
  };

  const onClearBtnClick = () => {
    dispatch(clearCart());

    if (products.length) {
      products.forEach((product) => {
        dispatch(setProductCount({ id: product.id, count: 1 }));
        dispatch(setProductsListWithChangedCounters());
      });
    }
  };

  React.useEffect(() => {
    dispatch(setTotalPapams());
  }, []);

  return (
    <div className={styles.full}>
      <div className={styles.head}>
        <div className={styles.title}>
          <div className={styles.basketIcon}>
            <img src="src/assets/images/basket-black.svg" alt="image" />
            <h2 className={styles.title}>Корзина</h2>
          </div>
        </div>
        <button className={styles.cleanBasketBtn}>
          <img className={styles.trashIcon} src="src\assets\images\trash.svg" alt="image" />
          <span onClick={onClearBtnClick} className={styles.cleanBtnText}>
            Очистить корзину
          </span>
        </button>
      </div>

      <div className={styles.orderList}>
        {products.length && products.map((product: ProductInterface) => <OrderListItem key={product.id} {...product} />)}
      </div>

      <div className={styles.total}>
        <div className={styles.totalValue}>
          Всего товаров:
          <span>{totalCount} шт.</span>
        </div>
        <div className={styles.totalPrice}>
          Сумма заказа:
          <span>{totalPrice.toLocaleString()} ₽</span>
        </div>
      </div>

      <div className={styles.actions}>
        <Link to={'/'} onClick={onMainPageLinkClick}>
          <button className={styles.toMainBtn}>На главную</button>
        </Link>
        <button className={styles.payBtn}>Оплатить</button>
      </div>
    </div>
  );
};

export default FullCart;

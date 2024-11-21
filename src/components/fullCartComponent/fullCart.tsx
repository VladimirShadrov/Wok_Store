import { Link } from 'react-router-dom';
import OrderListItem from '../orderListItemComponent/orderListItem';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterCategory } from '../../store/slices/filterSlice';
import { RootState } from '../../store/store';
import styles from './fullCart.module.scss';

const FullCart = () => {
  const dispatch = useDispatch();
  const { totalCount, totalPrice } = useSelector((store: RootState) => store.cart);

  const onMainPageLinkClick = () => {
    dispatch(setFilterCategory({ name: 'Все', filterKey: 'category' }));
  };

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
          <span className={styles.cleanBtnText}>Очистить корзину</span>
        </button>
      </div>

      <div className={styles.orderList}>
        {[1, 2, 3].map((item) => (
          <OrderListItem key={item} />
        ))}
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

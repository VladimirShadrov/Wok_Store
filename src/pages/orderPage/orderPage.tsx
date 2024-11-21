import { Link } from 'react-router-dom';
import styles from './orderPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../store/slices/cartSlice';
import { RootState } from '../../store/store';
import { setProductCount, setProductsListWithChangedCounters } from '../../store/slices/productSlice';

const OrderPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((store: RootState) => store.cart.products);

  const onToMainPageBtnClick = () => {
    dispatch(clearCart());

    if (products.length) {
      products.forEach((product) => {
        dispatch(setProductCount({ id: product.id, count: 1 }));
        dispatch(setProductsListWithChangedCounters());
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Это учебный проект</h2>
      <p className={styles.text}>поэтому оплачивать ничего не нужно &#128513;</p>
      <p className={styles.text}>Спасибо за интерес, проявленный к моему сайту!</p>
      <Link to={'/'}>
        <button onClick={onToMainPageBtnClick} className={styles.toMainBtn}>
          На главную
        </button>
      </Link>
    </div>
  );
};

export default OrderPage;

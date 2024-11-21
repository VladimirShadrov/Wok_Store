import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFilterCategory } from '../../store/slices/filterSlice';
import styles from './emptyCart.module.scss';

const EmptyCart = () => {
  const dispatch = useDispatch();
  const onMainPageLinkClick = () => {
    dispatch(setFilterCategory({ name: 'Все', filterKey: 'category' }));
  };

  return (
    <div className={styles.empty}>
      <h2 className={styles.emptyTitle}>Ваша корзина пуста</h2>
      <p className={styles.emptyText}>Вероятнее всего вы ничего не успели заказать. Для того, чтобы заказать вернитесь на главную страницу</p>
      <div className={styles.emptyImg}>
        <img src="src/assets/images/empty-bascket.svg" alt="image" />
      </div>

      <Link to={'/'} onClick={onMainPageLinkClick}>
        <button className={styles.emptyBtn}>Вернуться на главную</button>
      </Link>
    </div>
  );
};

export default EmptyCart;

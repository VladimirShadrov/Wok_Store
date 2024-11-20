import { Link } from 'react-router-dom';
import styles from './basketBtn.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const BasketBtn = () => {
  const { totalCount, totalPrice } = useSelector((store: RootState) => store.cart);
  return (
    <div className={styles.basketBtnWrapper}>
      <Link to={'/basket'} className={styles.basketLink} />
      <div className={styles.sum}>{totalPrice.toLocaleString()} ₽</div>
      <div className={styles.separator}></div>
      <div className={styles.valueWrapper}>
        <div className={styles.icon}></div>
        <div className={styles.value}>{totalCount}</div>
      </div>
    </div>
  );
};

export default BasketBtn;

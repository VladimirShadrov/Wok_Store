import { Link } from 'react-router-dom';
import styles from './basketBtn.module.scss';

const BasketBtn = () => {
  return (
    <div className={styles.basketBtnWrapper}>
      <Link to={'/basket'} className={styles.basketLink} />
      <div className={styles.sum}>5 999 696 ₽</div>
      <div className={styles.separator}></div>
      <div className={styles.valueWrapper}>
        <div className={styles.icon}></div>
        <div className={styles.value}>369</div>
      </div>
    </div>
  );
};

export default BasketBtn;

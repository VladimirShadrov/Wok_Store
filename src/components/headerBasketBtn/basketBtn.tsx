import styles from './basketBtn.module.scss';

console.log('Styles: ', styles);

const BasketBtn = () => {
  return (
    <div className={styles.basketBtnWrapper}>
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

import styles from './searchField.module.scss';

const SearchField = () => {
  return (
    <div className={styles.searchWrapper}>
      <div className={styles.icon}></div>
      <input type="text" className={styles.searchField} placeholder="Найти лапшу..." />
    </div>
  );
};

export default SearchField;

import React from 'react';
import styles from './searchField.module.scss';
import { WokContext } from '../../context/wokContext';

const SearchField = () => {
  const { searchValue, setSearchValue } = React.useContext(WokContext);
  return (
    <div className={styles.searchWrapper}>
      <div className={styles.icon}></div>
      <input
        onChange={(event) => setSearchValue(event.target.value)}
        value={searchValue}
        type="text"
        className={styles.searchField}
        placeholder="Найти лапшу..."
      />
      {searchValue && <div className={styles.clearBtn} onClick={() => setSearchValue('')}></div>}
    </div>
  );
};

export default SearchField;

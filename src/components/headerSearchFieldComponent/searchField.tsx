import styles from './searchField.module.scss';

type SearchFieldProps = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

const SearchField: React.FC<SearchFieldProps> = ({ searchValue, setSearchValue }) => {
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

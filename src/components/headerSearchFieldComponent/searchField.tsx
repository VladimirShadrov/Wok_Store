import React from 'react';
import styles from './searchField.module.scss';
import { WokContext } from '../../context/wokContext';
import useDebounce from '../../hooks/useDebounce';

const SearchField = () => {
  const { setSearchValue } = React.useContext(WokContext);
  const [inputValue, setInputValue] = React.useState('');
  const inputRef = React.useRef(null);
  const debouncedInput = useDebounce(changeSearchValue, 250);

  const onClearInputBtnClick = () => {
    setSearchValue('');
    setInputValue('');
    if (inputRef.current) {
      const input = inputRef.current as HTMLInputElement;
      input.focus();
    }
  };

  function changeSearchValue() {
    if (inputRef.current) {
      const input = inputRef.current as HTMLInputElement;
      setSearchValue(input.value);
    }
  }

  const onInputChange = (value: string) => {
    setInputValue(value);
    debouncedInput();
  };

  return (
    <div className={styles.searchWrapper}>
      <div className={styles.icon}></div>
      <input
        ref={inputRef}
        onChange={(event) => onInputChange(event.target.value) /*(event) => setSearchValue(event.target.value)*/}
        value={inputValue}
        type="text"
        className={styles.searchField}
        placeholder="Найти лапшу..."
      />
      {inputValue && <div className={styles.clearBtn} onClick={onClearInputBtnClick}></div>}
    </div>
  );
};

export default SearchField;

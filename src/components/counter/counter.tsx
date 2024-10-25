import React from 'react';
import styles from './counter.module.scss';

const Counter = () => {
  const [count, setCount] = React.useState(1);

  const decreaseCounter = () => {
    if (count <= 1) {
      return;
    }
    setCount(count - 1);
  };

  const increaseCounter = () => {
    setCount(count + 1);
  };
  return (
    <div className={styles.counter}>
      <div onClick={decreaseCounter} className={styles.decBtn}>
        -
      </div>
      <div className={styles.count}>{count}</div>
      <div onClick={increaseCounter} className={styles.incBtn}>
        +
      </div>
    </div>
  );
};

export default Counter;

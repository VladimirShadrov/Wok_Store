import React from 'react';
import styles from './counter.module.scss';

type CounterPropsType = {
  callback: (count: number) => void;
  initialCount?: number;
};

const Counter = ({ callback, initialCount = 1 }: CounterPropsType) => {
  const [count, setCount] = React.useState(initialCount);

  const decreaseCounter = () => {
    if (count <= 1) {
      return;
    }
    setCount(count - 1);
  };

  const increaseCounter = () => {
    setCount(count + 1);
  };

  React.useEffect(() => {
    callback(count);
  }, [count]);

  React.useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);

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

import React from 'react';
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
    <div className="counter">
      <div onClick={decreaseCounter} className="dec-btn">
        -
      </div>
      <div className="count">{count}</div>
      <div onClick={increaseCounter} className="inc-btn">
        +
      </div>
    </div>
  );
};

export default Counter;

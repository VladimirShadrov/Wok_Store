import React from 'react';

const useDebounce = (callback: () => void, delay: number) => {
  const timerId = React.useRef(0);

  const debouncedCallback = React.useCallback(
    (...args) => {
      if (timerId.current) {
        clearTimeout(timerId.current);
      }

      timerId.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
  return debouncedCallback;
};

export default useDebounce;

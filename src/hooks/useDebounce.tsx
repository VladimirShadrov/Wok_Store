import React from 'react';

const useDebounce = <T extends (...args: unknown[]) => void>(callback: T, delay: number) => {
  const timerId = React.useRef(0);

  const debouncedCallback = React.useCallback(
    (...args: Parameters<T>) => {
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

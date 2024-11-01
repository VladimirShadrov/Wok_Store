import React, { PropsWithChildren } from 'react';

type WokContextType = {
  searchValue: string;
  setSearchValue: (value: string) => void;
};

const defaultValue = {
  searchValue: '',
  setSearchValue: () => {},
};

export const WokContext = React.createContext<WokContextType>(defaultValue);

export const WokContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [searchValue, setSearchValue] = React.useState('');

  return <WokContext.Provider value={{ searchValue, setSearchValue }}>{children}</WokContext.Provider>;
};

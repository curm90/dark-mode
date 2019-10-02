import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const localStorageValue = localStorage.getItem(key);

    return localStorageValue ? JSON.parse(localStorageValue) : initialValue;
  });

  const setValue = value => {
    setStoredValue(value);

    localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};

export default useLocalStorage;

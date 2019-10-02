import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initialValue) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage(key, initialValue);

  useEffect(() => {
    const bodyEl = document.querySelector('body');
    if (isDarkMode) {
      bodyEl.classList.add('dark-mode');
    } else {
      bodyEl.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
};

export default useDarkMode;

import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage(key, initialValue);

  useEffect(() => {
    if (isDarkMode) {
      const bodyEl = document.querySelector('body');
      bodyEl.classList.add('dark-mode');
    } else {
      bodyEl.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
};

export default useDarkMode;

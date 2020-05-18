import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (initialValue) => {
  const [storedValue, setStoredValue] = useLocalStorage('mode', initialValue);

  const setValue = (value) => {
    setStoredValue(value);
  }

  return [storedValue, setValue];
}
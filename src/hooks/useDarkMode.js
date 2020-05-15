import useLocalStorage from './useLocalStorage';

export const useDarkMode = () => {
  const [storedValue, setStoredValue] = useLocalStorage('mode', 'light');

  const setValue = (value) => {
    setStoredValue(value);
  }

  return [storedValue, setValue];
}
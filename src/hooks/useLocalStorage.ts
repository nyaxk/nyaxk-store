
import { useState, useEffect } from 'react';

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  expirationMinutes: number = 15
): [T, (value: T) => void] {
  const getStoredValue = (): T => {
    try {
      const item = window.localStorage.getItem(key);
      
      if (item) {
        const parsedItem = JSON.parse(item);
        const now = new Date();
        
        if (parsedItem.expiry && new Date(parsedItem.expiry) > now) {
          return parsedItem.value;
        } else {
          window.localStorage.removeItem(key);
        }
      }
      return initialValue;
    } catch (error) {
      console.error('Error retrieving from localStorage:', error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<T>(() => getStoredValue());

  const setValue = (value: T) => {
    try {
      const expiryDate = new Date();
      expiryDate.setMinutes(expiryDate.getMinutes() + expirationMinutes);
      
      const valueWithExpiry = {
        value,
        expiry: expiryDate.toISOString()
      };
      
      window.localStorage.setItem(key, JSON.stringify(valueWithExpiry));
      setStoredValue(value);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue) {
        try {
          const parsedValue = JSON.parse(e.newValue);
          const now = new Date();
          
          if (parsedValue.expiry && new Date(parsedValue.expiry) > now) {
            setStoredValue(parsedValue.value);
          }
        } catch (error) {
          console.error('Error parsing localStorage change:', error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key]);

  return [storedValue, setValue];
}

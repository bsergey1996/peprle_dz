import { useState, useEffect, Dispatch, SetStateAction } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] {
  // Ленивая инициализация (читаем только один раз при старте)
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      // Если ключ есть — парсим, если нет — возвращаем initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Ошибка чтения localStorage:", error);
      return initialValue;
    }
  });

  // Эффект сохранения (записываем при каждом изменении)
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Ошибка записи в localStorage:", error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

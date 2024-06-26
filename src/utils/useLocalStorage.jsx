import { useEffect, useState } from "react";
import { useIsClient } from "./useIsClient";

const getInitialValue = (key, defaultValue) => {
  if (typeof window === "undefined") {
    return defaultValue;
  }

  const storedItem = localStorage.getItem(key);

  if (!storedItem) {
    return defaultValue;
  }

  try {
    return JSON.parse(storedItem);
  } catch (e) {
    localStorage.removeItem(key);
    return defaultValue;
  }
};

export const useLocalStorageState = (key, defaultValue) => {
  const [state, setState] = useState(() => getInitialValue(key, defaultValue));
  const isClient = useIsClient();

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  if (!isClient) {
    return [defaultValue, setState];
  }

  return [state, setState];
};

import { Dispatch, SetStateAction, useEffect, useState } from "react";

import useIsFirstRender from "./useIsFirstRender";

type UseLocalStorage = (
  key: string,
  defaultValue: string
) => [string, Dispatch<SetStateAction<string>>];

const useLocalStorage: UseLocalStorage = (key, defaultValue) => {
  const isFirstRender = useIsFirstRender();

  const [currentValue, setCurrentValue] = useState("");

  useEffect(() => {
    const currentValueInLocalStorage = localStorage.getItem(key);

    setCurrentValue(currentValueInLocalStorage ?? defaultValue);
  }, [defaultValue, key]);

  useEffect(() => {
    if (isFirstRender) return;

    localStorage.setItem(key, currentValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentValue, key]);

  return [currentValue, setCurrentValue];
};

export default useLocalStorage;

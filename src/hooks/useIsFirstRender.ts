import { useRef, useEffect } from "react";

const useIsFirstRender = () => {
  const firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  return firstRender.current;
};

export default useIsFirstRender;

import { useCallback, useEffect, useReducer, useRef } from "react";

type Action = "finished" | "initCall";

// eslint-disable-next-line @typescript-eslint/ban-types
const useDebounceFunction = <Fn extends Function, Props>(
  fn: Fn,
  delay: number
) => {
  const propsToFnRef = useRef<Props[]>([]);

  const [debounceController, dispatchDebounceController] = useReducer(
    (state, action: Action) => (action === "finished" ? 0 : ++state),
    0
  );

  useEffect(() => {
    if (!debounceController) return;

    const timer = setTimeout(fn, delay, ...propsToFnRef.current);

    return () => {
      clearTimeout(timer);
    };
  }, [debounceController, delay, fn]);

  useEffect(() => {
    if (debounceController) return;

    propsToFnRef.current = [];
    dispatchDebounceController("finished");
  }, [debounceController]);

  const initDebouncedFunction = useCallback((props: Props[]) => {
    propsToFnRef.current = props;

    dispatchDebounceController("initCall");
  }, []);

  return initDebouncedFunction;
};

export default useDebounceFunction;

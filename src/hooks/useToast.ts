import { useToast as chakraUseToast, UseToastOptions } from "@chakra-ui/react";

const useToast = (useToastOptions?: UseToastOptions) =>
  chakraUseToast({
    isClosable: true,
    duration: 5000,
    position: "top-right",
    ...useToastOptions,
  });

export default useToast;

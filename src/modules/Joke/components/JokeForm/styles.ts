import { chakra, Button as ChakraButton } from "@chakra-ui/react";

import InternalInput, { InputProps } from "components/Input";

export const Input = chakra(InternalInput, {
  baseStyle: {
    bgColor: "gray.200",
  },
});

export const Button = chakra(ChakraButton, {
  baseStyle: {
    flex: { base: "1", sm: "unset" },
    maxW: { base: "300px", sm: "unset" },
    w: { sm: "182px" },
    fontSize: { base: "14px", sm: "18px" },
  },
});

export const inputWrapperProps: InputProps["wrapperProps"] = {
  flex: { base: "100%", md: "47%" },
};

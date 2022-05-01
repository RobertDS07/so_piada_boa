import { chakra, Text as ChakraText } from "@chakra-ui/react";

export const Text = chakra(ChakraText, {
  baseStyle: {
    fontSize: { base: "12px", sm: "14px" },
    color: "gray.300",
  },
});

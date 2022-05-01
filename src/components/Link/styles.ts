import { chakra, Link as ChakraLink } from "@chakra-ui/react";

export const Link = chakra(ChakraLink, {
  baseStyle: {
    display: "flex",
    alignItems: "center",
  },
});

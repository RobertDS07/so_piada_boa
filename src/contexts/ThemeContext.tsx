import { extendTheme, ChakraProvider } from "@chakra-ui/react";

import internalTheme from "styles/theme";

const theme = extendTheme({ ...internalTheme });

const ThemeProvider = ({ children }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      {children}
    </ChakraProvider>
  );
};

export default ThemeProvider;

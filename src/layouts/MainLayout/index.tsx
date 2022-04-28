import { Box, Flex } from "@chakra-ui/layout";

import Background from "./components/Background";

const MainLayout = ({ children }) => {
  return (
    <Flex w="100vw" minH="100vh" alignItems="center" justifyContent="center">
      <Background />

      {children}
    </Flex>
  );
};

export default MainLayout;

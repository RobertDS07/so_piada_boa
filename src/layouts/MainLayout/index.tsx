import { Flex } from "@chakra-ui/layout";

import Background from "./components/Background";

const MainLayout = ({ children }) => {
  return (
    <Flex
      w="100vw"
      minH="100vh"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      <Background />

      {children}
    </Flex>
  );
};

export default MainLayout;

import { Box, Flex } from "@chakra-ui/react";

const Background = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      zIndex={-1}
      pos="absolute"
      bg='transparent url("/assets/images/main-background.png") no-repeat center'
      bgSize="cover"
    >
      <Box w="100%" h="100%" bgColor="red.main" />
    </Flex>
  );
};

export default Background;

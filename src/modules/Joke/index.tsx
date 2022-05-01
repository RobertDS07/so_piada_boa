import { Flex, Text } from "@chakra-ui/react";

import JokeForm from "./components/JokeForm";

const Joke = () => {
  return (
    <Flex
      gap="40px"
      direction="column"
      w={{ base: "100vw", sm: "80%", lg: "900px" }}
      h={{ base: "100vh", sm: "auto" }}
      p={{ base: "40px 15px", sm: "52px 60px" }}
      borderRadius={{ sm: "3xl" }}
      bgColor="whiteBackground"
    >
      <Text fontSize="30px" color="red.main" mb="45px">
        Nova piada
      </Text>

      <JokeForm />
    </Flex>
  );
};

export default Joke;

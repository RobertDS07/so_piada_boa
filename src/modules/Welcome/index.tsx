import { Button, Flex } from "@chakra-ui/react";

import Image from "components/Image";

import Description from "./components/Description";
import Title from "./components/Title";

const Welcome = () => {
  return (
    <Flex
      as="main"
      w={{ base: "90%", xs: "450px" }}
      pos="relative"
      p="35px"
      bgColor="whiteBackground"
      borderRadius="30px"
      direction="column"
      align="center"
      gap="50px"
    >
      <Image
        display={{ base: "none", sm: "block" }}
        h="441px"
        w="122px"
        pos="absolute"
        bottom="-200px"
        left="-60px"
        objectFit="contain"
        src="/assets/images/microfone-realista.png"
        alt="microfone de estúdio"
      />

      <Image
        h="130px"
        w="200px"
        objectFit="contain"
        src="/assets/images/microfone-icone-ha-ha.png"
        alt="icone de microfone com risadas"
      />

      <Title />

      <Description />

      <Button size="lg" w={{ base: "90%", xs: "280px" }} colorScheme="red">
        Começar
      </Button>
    </Flex>
  );
};

export default Welcome;

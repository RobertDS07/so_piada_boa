import { Button, Flex, Text } from "@chakra-ui/react";

import Image from "components/Image";
import Link from "components/Link";

const NotFound = () => {
  return (
    <Flex
      as="main"
      w={{ base: "90%", xs: "450px" }}
      p="35px"
      bgColor="whiteBackground"
      borderRadius="3xl"
      direction="column"
      align="center"
      gap="50px"
    >
      <Image
        src="/assets/images/404.png"
        alt="404 not found image"
        objectFit="contain"
        w="250px"
        h="250px"
      />

      <Text align="center">Parece que o que você procura não esta aqui...</Text>

      <Link isInternalPage isButtonAsChildren href="/home">
        <Button colorScheme="red">Retornar a Home</Button>
      </Link>
    </Flex>
  );
};

export default NotFound;

import { Button, Flex, Text } from "@chakra-ui/react";

import Image from "components/Image";

export interface ErrorHandlerProps {
  onClickRetry: () => any;
}

const ErrorHandler = ({ onClickRetry }: ErrorHandlerProps) => {
  const handleOnClickRetry = () => {
    onClickRetry();
  };

  return (
    <Flex direction="column" gap="50px" align="center">
      <Image
        src="/assets/images/error-image.png"
        alt="error image"
        objectFit="contain"
        w="200px"
        h="200px"
      />

      <Text align="center">Oops.. Ocorreu um erro, tente novamente!</Text>

      <Button colorScheme="red" onClick={handleOnClickRetry}>
        Tentar novamente
      </Button>
    </Flex>
  );
};

export default ErrorHandler;

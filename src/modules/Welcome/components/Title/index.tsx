import { Text } from "@chakra-ui/react";

const Title = () => {
  return (
    <Text textTransform="uppercase" fontSize={{ base: "30px", sm: "38px" }}>
      Só{" "}
      <Text as="span" color="red.main">
        piada
      </Text>{" "}
      boa
    </Text>
  );
};

export default Title;

import { Box, Text } from "@chakra-ui/react";

const Description = () => {
  return (
    <Box
      maxW="249px"
      textAlign="center"
      fontSize={{ base: "14px", sm: "16px" }}
    >
      <Text>
        Participe da maior comunidade de piadistas do <strong>Brasil</strong>.
        Vote nas piadas de outros usuários e cadastre suas as suas próprias.
      </Text>

      <Text fontWeight="bold" mt="50px">
        Só não vai morrer de rir! kkk
      </Text>
    </Box>
  );
};

export default Description;

import { Flex, Text } from "@chakra-ui/react";

import JokeCreatedAtText, {
  JokeCreatedAtTextProps,
} from "../JokeCreatedAtText";

export interface JokePostHeaderProps
  extends Pick<JokeCreatedAtTextProps, "jokeCreatedAt"> {
  jokeId: number;
  jokeCreatedAt: Date;
}

const JokePostHeader = ({ jokeCreatedAt, jokeId }: JokePostHeaderProps) => {
  return (
    <Flex justify="space-between">
      <Text color="red.main" fontSize={{ sm: "20px" }}>
        Piada {jokeId}
      </Text>

      <JokeCreatedAtText
        jokeCreatedAt={jokeCreatedAt}
        display={{ base: "block", md: "none" }}
      />
    </Flex>
  );
};

export default JokePostHeader;

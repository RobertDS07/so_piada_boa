import { As, Flex, ResponsiveValue, Text } from "@chakra-ui/react";

import useJokePost, { useJokePostProps } from "hooks/useJokePost";

import { JokeCreatedAtTextProps } from "./components/JokeCreatedAtText";
import JokePostFooter, {
  JokePostFooterProps,
} from "./components/JokePostFooter";
import JokePostHeader, {
  JokePostHeaderProps,
} from "./components/JokePostHeader";

export interface JokePostProps
  extends JokePostHeaderProps,
    Pick<JokePostFooterProps, "jokeLikes" | "jokeAuthor" | "jokeDislikes">,
    Pick<JokeCreatedAtTextProps, "jokeCreatedAt">,
    Pick<useJokePostProps, "mutateJoke"> {
  joke: string;
  width: ResponsiveValue<string>;

  onClick?: () => void;
  as?: As<any>;
}

const JokePost = ({
  width,
  mutateJoke,
  joke,
  jokeId,
  jokeLikes,
  jokeAuthor,
  jokeDislikes,
  jokeCreatedAt,
  as,
  onClick,
}: JokePostProps) => {
  const { handleOnClick, handleOnLikeJoke, handleOnDislikeJoke } = useJokePost({
    onClick,
    jokeId,
    mutateJoke,
  });

  return (
    <Flex
      as={as}
      onClick={handleOnClick}
      direction="column"
      gap="15px"
      width={width}
      bgColor="white"
      borderRadius="md"
      p={{ base: "20px 15px", sm: "20px 30px" }}
      cursor={onClick ? "pointer" : "auto"}
    >
      <JokePostHeader jokeCreatedAt={jokeCreatedAt} jokeId={jokeId} />

      <Text fontSize={{ base: "14px", sm: "16px" }} whiteSpace="pre-line">
        {joke}
      </Text>

      <JokePostFooter
        onLike={handleOnLikeJoke}
        onDislike={handleOnDislikeJoke}
        jokeLikes={jokeLikes}
        jokeAuthor={jokeAuthor}
        jokeDislikes={jokeDislikes}
        jokeCreatedAt={jokeCreatedAt}
      />
    </Flex>
  );
};

export default JokePost;

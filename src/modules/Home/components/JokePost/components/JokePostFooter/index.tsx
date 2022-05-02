import { Button, Flex, Text } from "@chakra-ui/react";

import Icon from "components/Icon";

import JokeCreatedAtText, {
  JokeCreatedAtTextProps,
} from "../JokeCreatedAtText";

export interface JokePostFooterProps
  extends Pick<JokeCreatedAtTextProps, "jokeCreatedAt"> {
  onLike: () => void;
  onDislike: () => void;
  jokeAuthor: string;
  jokeLikes: number;
  jokeDislikes: number;
}

export const BUTTONS_IDS = {
  likeButton: "likeButton",
  likeIcon: "likeIcon",
  dislikeButton: "dislikeButton",
  dislikeIcon: "dislikeIcon",
};

const JokePostFooter = ({
  onLike,
  onDislike,
  jokeAuthor,
  jokeLikes,
  jokeDislikes,
  jokeCreatedAt,
}: JokePostFooterProps) => {
  return (
    <Flex justify="space-between" align="center">
      <Text
        maxW={{ base: "100%", sm: "30%" }}
        overflow="hidden"
        whiteSpace="nowrap"
        textOverflow="ellipsis"
      >
        {jokeAuthor}
      </Text>

      <Flex gap="20px">
        <Button
          id={BUTTONS_IDS.likeButton}
          onClick={onLike}
          color="green"
          fontSize="14px"
          variant="unstyled"
          leftIcon={
            <Icon id={BUTTONS_IDS.likeIcon} as="AiFillLike" color="gray.200" />
          }
        >
          {jokeLikes}
        </Button>

        <Button
          id={BUTTONS_IDS.dislikeButton}
          onClick={onDislike}
          color="red"
          fontSize="14px"
          variant="unstyled"
          leftIcon={
            <Icon
              id={BUTTONS_IDS.dislikeIcon}
              as="AiFillDislike"
              color="gray.200"
            />
          }
        >
          {jokeDislikes}
        </Button>
      </Flex>

      <JokeCreatedAtText
        jokeCreatedAt={jokeCreatedAt}
        display={{ base: "none", md: "block" }}
      />
    </Flex>
  );
};

export default JokePostFooter;

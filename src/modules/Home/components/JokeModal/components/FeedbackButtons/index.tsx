import { Button, Flex } from "@chakra-ui/react";

interface FeedbackButtonsProps {
  onLike: () => any;
  onDislike: () => any;
}

const FeedbackButtons = ({ onDislike, onLike }: FeedbackButtonsProps) => {
  return (
    <Flex gap={{ base: "15px" }} justify="center">
      <Button onClick={onLike} size="lg" colorScheme="green">
        &#128514; Chorei
      </Button>

      <Button onClick={onDislike} size="lg" colorScheme="red">
        &#128529; Nem ri
      </Button>
    </Flex>
  );
};

export default FeedbackButtons;

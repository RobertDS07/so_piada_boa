import JokePost from "modules/Home/components/JokePost";
import { FormattedJoke } from "modules/Home/hooks/useHome";

import {
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/react";

import RenderIf from "components/RenderIf";

import useJokePost from "hooks/useJokePost";

import FeedbackButtons from "./components/FeedbackButtons";

import useJokeModal, { UseJokeModalProps } from "./hooks/useJokeModal";

type JokeModalProps = Pick<ModalProps, "isOpen" | "onClose"> &
  Pick<UseJokeModalProps, "formattedJoke" | "mutateJoke">;

const JokeModal = ({
  isOpen,
  onClose,
  mutateJoke,
  formattedJoke,
}: JokeModalProps) => {
  const { currentJoke, handleMutateJoke } = useJokeModal({
    mutateJoke,
    formattedJoke,
  });

  const { handleOnLikeJoke, handleOnDislikeJoke } = useJokePost({
    jokeId: currentJoke?.jokeId as number,
    mutateJoke: handleMutateJoke,
  });

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay />

      <ModalContent m="20px">
        <ModalBody p={{ base: "20px 15px", sm: "20px 30px" }}>
          <RenderIf condition={!!currentJoke}>
            <JokePost
              width="100%"
              mutateJoke={handleMutateJoke}
              {...(currentJoke as FormattedJoke)}
            />
          </RenderIf>

          <Divider mb="60px" />

          <FeedbackButtons
            onLike={handleOnLikeJoke}
            onDislike={handleOnDislikeJoke}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default JokeModal;

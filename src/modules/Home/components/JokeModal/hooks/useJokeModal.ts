import { useCallback, useEffect, useState } from "react";

import { JokePostProps } from "modules/Home/components/JokePost";
import { FormattedJoke } from "modules/Home/hooks/useHome";

import { Joke } from "services/api/modules/jokes/jokesTypes";

export interface UseJokeModalProps extends Pick<JokePostProps, "mutateJoke"> {
  formattedJoke?: FormattedJoke;
}

const useJokeModal = ({ mutateJoke, formattedJoke }: UseJokeModalProps) => {
  const [joke, setJoke] = useState(formattedJoke);

  useEffect(() => setJoke(formattedJoke), [formattedJoke]);

  const handleMutateJoke = useCallback(
    async (updatedJoke: Joke) => {
      await mutateJoke(updatedJoke);

      const formattedJoke: FormattedJoke = {
        joke: updatedJoke.description,
        jokeAuthor: updatedJoke.user.name,
        jokeCreatedAt: new Date(updatedJoke.created),
        jokeDislikes: updatedJoke.dislike,
        jokeId: updatedJoke.id,
        jokeLikes: updatedJoke.likes,
      };

      setJoke(formattedJoke);
    },
    [mutateJoke]
  );

  return {
    currentJoke: joke,
    handleMutateJoke,
  };
};

export default useJokeModal;

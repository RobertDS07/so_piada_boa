import useToast from "hooks/useToast";

import * as jokesRepository from "services/api/modules/jokes/jokesRepository";

import { JokePostProps } from "../modules/Home/components/JokePost";
import { BUTTONS_IDS } from "../modules/Home/components/JokePost/components/JokePostFooter";

export interface UseJokePostProps
  extends Pick<JokePostProps, "onClick" | "jokeId"> {
  mutateJoke: (updatedJoke) => Promise<any>;
}

const useJokePost = ({ onClick, jokeId, mutateJoke }: UseJokePostProps) => {
  const toast = useToast();

  const handleOnClick = (e) => {
    if (!onClick) return;

    const targetId = e.target.id;
    const isPathIcon = e.target.nodeName === "path";

    const idsToMissClick = Object.values(BUTTONS_IDS);

    const notCanFireOnClick = idsToMissClick.includes(targetId) || isPathIcon;
    if (notCanFireOnClick) return;

    onClick();
  };

  const handleOnLikeJoke = async () => {
    try {
      const res = await jokesRepository.likeJoke(jokeId);

      const updatedJoke = await res.json();

      mutateJoke(updatedJoke);
    } catch (e) {
      toast({
        status: "error",
        title: "Error",
        description:
          "Ocorreu um erro ao tentar curtir essa piada, tente novamente!",
      });
    }
  };

  const handleOnDislikeJoke = async () => {
    try {
      const res = await jokesRepository.dislikeJoke(jokeId);

      const updatedJoke = await res.json();

      mutateJoke(updatedJoke);
    } catch (e) {
      toast({
        status: "error",
        title: "Error",
        description:
          "Ocorreu um erro ao tentar não curtir essa piada, tente novamente!",
      });
    }
  };

  return {
    handleOnClick,
    handleOnLikeJoke,
    handleOnDislikeJoke,
  };
};

export default useJokePost;

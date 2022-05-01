import { useCallback, useState } from "react";

import { JokePostProps } from "modules/Home/components/JokePost";

import { useGetJokes } from "services/api/modules/jokes/jokesHooks";
import { GetJokesParams, Joke } from "services/api/modules/jokes/jokesTypes";

export type FormattedJoke = Pick<
  JokePostProps,
  | "joke"
  | "jokeAuthor"
  | "jokeCreatedAt"
  | "jokeDislikes"
  | "jokeId"
  | "jokeLikes"
>;

const DEFAULT_GET_JOKES_PARAMS: GetJokesParams = {
  _order: "desc",
  _sort: "created",
};

const useHome = () => {
  const [getJokesParams, setGetJokesParams] = useState<GetJokesParams>(
    DEFAULT_GET_JOKES_PARAMS
  );

  const { data, isValidating, mutate, error } = useGetJokes(getJokesParams);

  const updateSpecificJoke = useCallback(
    async (updatedJoke: Joke) => {
      if (!data) return;

      const indexOfCurrentJoke = data.findIndex(
        (joke) => joke.id === updatedJoke.id
      );

      if (indexOfCurrentJoke < 0) return;

      const cloneData = [...(data as Joke[])];

      cloneData[indexOfCurrentJoke] = updatedJoke;

      await mutate(cloneData);
    },
    [data, mutate]
  );

  const toggleJokesOrder = useCallback(
    () =>
      setGetJokesParams((oldParams) => {
        const nextOrder = oldParams._order === "desc" ? "asc" : "desc";

        return { ...oldParams, _order: nextOrder };
      }),
    []
  );

  const searchStringInJokes = useCallback(
    (stringToSearch: string) =>
      setGetJokesParams((oldParams) => ({
        ...oldParams,
        q: stringToSearch,
      })),
    []
  );

  const formatData = (jokes?: Joke[]): FormattedJoke[] => {
    if (!jokes) return [];

    const formattedJokes: FormattedJoke[] = jokes.map((joke) => ({
      jokeId: joke.id,
      joke: joke.description,
      jokeAuthor: joke.user.name,
      jokeLikes: joke.likes,
      jokeDislikes: joke.dislike,
      jokeCreatedAt: new Date(joke.created),
    }));

    return formattedJokes;
  };

  return {
    getJokesParams,
    toggleJokesOrder,
    searchStringInJokes,
    updateSpecificJoke,
    mutate,
    jokes: formatData(data),
    hasError: !!error,
    isLoading: isValidating,
  };
};

export default useHome;

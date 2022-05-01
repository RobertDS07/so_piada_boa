import fetchApi from "services/api";

import { DataToCreateJoke, GetJokesParams } from "./jokesTypes";

export const JOKES_ENDPOINT = "/jokes";

export const getJokeById = (id: number) => fetchApi(`${JOKES_ENDPOINT}/${id}`);

export const getJokes = (params?: GetJokesParams) =>
  fetchApi(JOKES_ENDPOINT, { params });

export const createJoke = ({ description, user }: DataToCreateJoke) =>
  fetchApi(JOKES_ENDPOINT, {
    method: "POST",
    body: {
      description,
      user,
      likes: 0,
      dislike: 0,
      created: new Date().toISOString(),
    },
  });

export const likeJoke = async (id: number) => {
  const currentJokeRes = await getJokeById(id);

  const currentJoke = await currentJokeRes.json();

  const currentTotalDislikes = currentJoke.likes;

  return fetchApi(`${JOKES_ENDPOINT}/${id}`, {
    method: "PATCH",
    body: {
      likes: currentTotalDislikes + 1,
    },
  });
};

export const dislikeJoke = async (id: number) => {
  const currentJokeRes = await getJokeById(id);

  const currentJoke = await currentJokeRes.json();

  const currentTotalDislikes = currentJoke.dislike;

  return fetchApi(`${JOKES_ENDPOINT}/${id}`, {
    method: "PATCH",
    body: {
      dislike: currentTotalDislikes + 1,
    },
  });
};

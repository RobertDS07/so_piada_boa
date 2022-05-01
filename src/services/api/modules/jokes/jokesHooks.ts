import useSWR, { SWRConfiguration } from "swr";

import { getJokes, JOKES_ENDPOINT } from "./jokesRepository";
import { GetJokesParams, Joke } from "./jokesTypes";

export const useGetJokes = (
  params?: GetJokesParams,
  SWRConfiguration?: SWRConfiguration
) =>
  useSWR<Joke[]>(
    { JOKES_ENDPOINT, ...params },
    async () => {
      const res = await getJokes(params);

      const data = await res.json();

      return data;
    },
    SWRConfiguration
  );

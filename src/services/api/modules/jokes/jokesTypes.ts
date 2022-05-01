import {
  SearchInAllProps,
  WithSortParams,
} from "services/api/@types/commonParams";

interface User {
  name: string;
  email: string;
}

export interface Joke {
  id: number;
  user: User;
  likes: number;
  dislike: number;
  created: string;
  description: string;
}

export type GetJokesParams = WithSortParams<keyof Pick<Joke, "created">> &
  SearchInAllProps;

export type DataToCreateJoke = Pick<Joke, "user" | "description">;

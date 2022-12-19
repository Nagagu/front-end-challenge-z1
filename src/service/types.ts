import { GraphQLError } from 'graphql';

export type Song = {
  id: number;
  name: string;
  image: string;
  description: string;
  genre: string;
  audio: { id: number; autoplay: boolean; url: string };
  author: { name: string };
};
export type Data = {
  songs: {
    songs: Song[];
  };
};
export type Error = {
  error: GraphQLError | undefined;
};

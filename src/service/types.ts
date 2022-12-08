import { GraphQLError } from 'graphql';

export type Song = {
  id: number;
  name: string;
};
export type Data = {
  songs: {
    songs: [Song];
  };
};
export type Error = {
  error: GraphQLError | undefined;
};

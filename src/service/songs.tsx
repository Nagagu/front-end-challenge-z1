import { gql, useQuery } from '@apollo/client';

const GET_SONGS = gql`
  query MyQuery {
    songs(pagination: { limit: 10, offset: 10 }) {
      songs {
        id
        name
      }
    }
  }
`;

export type Song = {
  id: number;
  name: string;
};
export type Data = {
  songs: {
    songs: [Song];
  };
};
export const MySong = () => {
  const { loading, error, data } = useQuery<Data>(GET_SONGS);

  console.log(data);
  return <>{data?.songs.songs.map((o) => o.name)}</>;
};

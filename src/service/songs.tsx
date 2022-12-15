import { gql, useQuery } from '@apollo/client';
import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { Data } from './types';

// const useFetch = () => {
//   const [data, setData] = useState<Data | undefined>(undefined);
//   const [error, setError] = useState<Error>(null);
//   const [loading, setLoading] = useState<Boolean>(false);

//   const GET_SONGS = gql`
//     query MyQuery {
//       songs(pagination: { limit: 10, offset: 10 }) {
//         songs {
//           id
//           name
//         }
//       }
//     }
//   `;

// };

const GET_SONGS = gql`
  # query SongsQuery($keyWord: String!, $offset: Int!, $limit: Int!) {
  query MyQuery {
    # songs(search: {$keyWord}, pagination: { limit: $limit, offset: $offset }) {
    songs(pagination: { limit: 10, offset: 10 }) {
      songs {
        id
        name
        image
        description
        genre
        audio {
          url
        }
        author {
          name
        }
        audio {
          id
          url
          autoPlay
        }
      }
    }
  }
`;

export const useFetch = () => {
  const { loading, error, data } = useQuery<Data>(GET_SONGS);
  const { setSongsList } = useContext(AppContext);
  setSongsList && setSongsList(data);
  return { loading, error, data };
  // console.log(data);
  // return <>{data?.songs.songs.map((o) => o.name)}</>;
};

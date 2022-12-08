import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
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
  query MyQuery {
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
  return { loading, error, data };
  // console.log(data);
  // return <>{data?.songs.songs.map((o) => o.name)}</>;
};

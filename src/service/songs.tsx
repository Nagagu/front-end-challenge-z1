import { gql, useQuery } from '@apollo/client';
import { useContext, useEffect, useState } from 'react';
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
  query SongsQuery($keyWord: String!, $offset: Int!, $limit: Int!) {
    songs(search: $keyWord, pagination: { limit: $limit, offset: $offset }) {
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

export const useFetch = (keyWord: string, limit: number, offset: number) => {
  const { loading, error, data, fetchMore, refetch } = useQuery<Data>(
    GET_SONGS,
    {
      variables: { keyWord: keyWord, limit: limit, offset: offset },
    },
  );
  const { setSongsList } = useContext(AppContext);

  useEffect(() => {
    setSongsList && setSongsList(data);
  }, [data]);

  const customFetchMore = (keyWord: string, limit: number, offset: number) =>
    fetchMore({
      variables: { keyWord: keyWord, limit: limit, offset: offset },
      updateQuery: (previousQueryResult, options) => {
        if (previousQueryResult?.songs?.songs === undefined) {
          return previousQueryResult;
        }
        const newSongList = [...previousQueryResult?.songs?.songs].concat(
          options.fetchMoreResult.songs.songs,
        );
        const result: Data = {
          ...options.fetchMoreResult,
          songs: { ...previousQueryResult.songs, songs: newSongList },
        };
        return result;
        //return {...previousQueryResult,songs:{...previousQueryResult.songs, songs: [...previousQueryResult.songs.songs, options.fetchMoreResult.songs.songs] }}
      },
    });

  return { loading, error, data, fetchMore: customFetchMore, refetch };
  // console.log(data);
  // return <>{data?.songs.songs.map((o) => o.name)}</>;
};

import { Text } from '$/components/Text';
import { useContext } from 'react';
import { AudioPlayer } from '../../../components/AudioPlayer';
import { SongList } from '../../../components/SongList';
import { AppContext } from '../../../context/AppContext';
import { Container, SearchInput } from './styles';

function HomeView(): JSX.Element {
  const { playingSong } = useContext(AppContext);
  return (
    <Container>
      <Text tag="h1" variant="title1">
        Explore
      </Text>
      <SearchInput placeholder="Search by title, genre..." />
      <SongList />
      {playingSong && <AudioPlayer />}
    </Container>
  );
}

export default HomeView;

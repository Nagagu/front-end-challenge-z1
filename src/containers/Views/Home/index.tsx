import { Text } from '$/components/Text';
import { useContext } from 'react';
import { AudioPlayer } from '../../../components/AudioPlayer';
import { SongList } from '../../../components/SongList/Index';
import { AppContext } from '../../../context/AppContext';
import { Container, SearchInput } from './styles';
import { useNearScreen } from '../../../utils/hooks/useNearScreen';

function HomeView(): JSX.Element {
  const { playingSong } = useContext(AppContext);
  const [el] = useNearScreen();

  return (
    <Container>
      <Text tag="h1" variant="title1">
        Explore
      </Text>
      <SearchInput placeholder="Search by title, genre..." />
      <SongList />
      {playingSong && <AudioPlayer />}
      <div ref={el as any}></div>
    </Container>
  );
}

export default HomeView;

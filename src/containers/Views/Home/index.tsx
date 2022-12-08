import { Text } from '$/components/Text';
import { AudioPlayer } from '../../../components/AudioPlayer';
import { SongList } from '../../../components/SongList';

import { Container, SearchInput } from './styles';

function HomeView(): JSX.Element {
  return (
    <Container>
      <Text tag="h1" variant="title1">
        Explore
      </Text>
      <SearchInput placeholder="Search by title, genre..." />
      <SongList />
      <AudioPlayer />
    </Container>
  );
}

export default HomeView;

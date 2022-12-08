import { Text } from '$/components/Text';
import { MySong } from '../../../service/songs';

import { Container, SearchInput } from './styles';

function HomeView(): JSX.Element {
  return (
    <Container>
      <Text tag="h1" variant="title1">
        Explore
      </Text>
      <MySong />
      <SearchInput placeholder="Search by title, genre..." />
      hoolaaaaaa
    </Container>
  );
}

export default HomeView;

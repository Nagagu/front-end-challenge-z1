import { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { Container, Input, SearchLineIcon } from './styles';
import { SearchInputProps } from './types';

export const SearchInput = ({ placeholder, className }: SearchInputProps) => {
  const { searchVal, setSearchVal } = useContext(AppContext);
  // const [searchVal, setSearchVal] = useState('');

  const handleInput = (e: any) => {
    setSearchVal && setSearchVal(e.target.value);
  };

  return (
    <Container className={className}>
      <SearchLineIcon />
      <Input
        onChange={handleInput}
        value={searchVal}
        name="search"
        label="search"
        hideLabel={true}
        placeholder={placeholder}
      />
    </Container>
  );
};

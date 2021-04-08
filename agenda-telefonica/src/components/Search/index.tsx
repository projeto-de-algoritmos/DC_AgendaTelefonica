import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { IoSearchOutline } from 'react-icons/io5';
import { Input } from '~/components';

import { Container, Button, StyledForm } from './styles';

const Search: React.FC = () => {
  const searchRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    (data) => {
      console.log(data);
    }, []);

  return (
    <Container>
     <StyledForm onSubmit={handleSubmit} ref={searchRef}>
        <Input name="search"placeholder="Pesquisar contato" />
        <Button><IoSearchOutline size={30}/></Button>
      </StyledForm>
    </Container>
  );
};

export default Search;

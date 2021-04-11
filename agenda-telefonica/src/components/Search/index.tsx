import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { IoSearchOutline } from 'react-icons/io5';
import { Input } from '~/components';
import IContact from '~/interfaces/IContact';
import binarySearch from '~/utils/binarySearch';

import { Container, Button, StyledForm } from './styles';

interface IProps {
  searchResult?: IContact;
  setSearchResult: any;
  searchName: boolean;
  contacts: IContact[];
}

const Search: React.FC<IProps> = ({
  setSearchResult,
  searchName,
  contacts
  }) => {
  const searchRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    (data) => {
      if(contacts.length===0){
        setSearchResult({ name: 'Não encontrado', phone: 'Não encontrado'});
        return;
      }
      const position = binarySearch(contacts, 0, contacts.length - 1,
        data.search, searchName ? 'name' : 'phone');

      if(position>-1){
        setSearchResult(contacts[position])
      }
      else{
        setSearchResult({ name: 'Não encontrado', phone: 'Não encontrado'});
      }
    }, [contacts, searchName]);

  return (
    <Container>
     <StyledForm onSubmit={handleSubmit} ref={searchRef}>
        <Input name="search"placeholder="Pesquisar contato" />
        <Button onClick={() => searchRef.current?.submitForm()}><IoSearchOutline size={30}/></Button>
      </StyledForm>
    </Container>
  );
};

export default Search;

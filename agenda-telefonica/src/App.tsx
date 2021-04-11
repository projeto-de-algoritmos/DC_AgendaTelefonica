import React, { useState, useEffect } from 'react';
import { Container, Header, Button, StyledForm, CardsContainer, CTitle } from './styles';
import { Search, Modal, Input, InputMask, DropdownButton, UserCard } from '~/components';
import './App.css';
import { IoMdPersonAdd, IoMdTrash, IoIosArrowRoundBack } from 'react-icons/io';
import mergeSort from '~/utils/mergeSort';
import IContact from '~/interfaces/IContact';

const App: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchName, setSearchName] = useState(true);
  const [searchNumber, setSearchNumber] = useState(false);
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [searchResult, setSearchResult] = useState<IContact>();

  const handleSubmit =
    async (data: IContact, { reset }:any) => {
        const contactsArray = contacts;
        console.log(contactsArray);
        const contact: IContact = {
          name: data.name,
          phone: data.phone,
        };
        contactsArray.push(contact);
        const newContacts = mergeSort(contactsArray, searchName ? 'name' : 'phone');
        setContacts(newContacts);
        localStorage.setItem('contactsArray', JSON.stringify(newContacts));
        reset();
        setModalVisible(false);
    }

  useEffect(() => {
    const contactsArray: IContact[] = JSON.parse(localStorage.getItem('contactsArray') || '[]');
    const newContacts = mergeSort(contactsArray, searchName ? 'name' : 'phone');
    setContacts(newContacts);
  }, [searchNumber, searchName]);

  const deleteContacts = () => {
    localStorage.removeItem('contactsArray');
    setContacts([]);
  };


  return (
    <Container>
      <Header>
        <Search
          searchResult={searchResult}
          setSearchResult={setSearchResult}
          searchName={searchName}
          contacts={contacts}
        />
        <DropdownButton
          searchName={searchName}
          setSearchName={setSearchName}
          searchNumber={searchNumber}
          setSearchNumber={setSearchNumber}
        />
        <Button onClick={() => { setModalVisible(true) }}>
          <IoMdPersonAdd size={30} />
        </Button>
      </Header>
      <CardsContainer>
        {!searchResult &&
          <>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}>
              <CTitle style={{ marginLeft: 'auto' }}>Seus contatos</CTitle>
              <Button style={{ marginLeft: 'auto' }} onClick={deleteContacts}>
                <IoMdTrash size={30} />
              </Button>
            </div>
            {contacts?.map((contact) =>
              <UserCard key={contact.phone} contact={contact} />
            )}
          </>
        }
        {!!searchResult &&
          <>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}>
              <CTitle style={{ marginLeft: 'auto' }}>Sua busca</CTitle>
              <Button style={{ marginLeft: 'auto' }} onClick={() => { setSearchResult(undefined) }}>
                <IoIosArrowRoundBack size={30} />
              </Button>
            </div>
            <UserCard key={searchResult.phone} contact={searchResult} />
          </>
        }
      </CardsContainer>
      <Modal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        btnClose={true}
      >
        <StyledForm onSubmit={handleSubmit}>
          <h1>Cadastrar contato</h1>
          <Input name="name" placeholder="Nome Completo" required />
          <InputMask
            name="phone"
            mask="99 9 9999 9999"
            placeholder="Telefone"
            required
          />
          <button type="submit">Cadastrar</button>
        </StyledForm>
      </Modal>
    </Container>
  );
}

export default App;

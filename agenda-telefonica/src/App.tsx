import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Container, Header, Button, StyledForm, CardsContainer, CTitle } from './styles';
import { Search, Modal, Input, InputMask, DropdownButton, UserCard } from '~/components';
import './App.css';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { IoMdPersonAdd, IoMdTrash, IoIosArrowRoundBack } from 'react-icons/io';
import getValidationErrors from '~/validators/getValidationsErrors';
import mergeSort from '~/utils/mergeSort';
import IContact from '~/interfaces/IContact';

const App: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchName, setSearchName] = useState(true);
  const [searchNumber, setSearchNumber] = useState(false);
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [searchResult, setSearchResult] = useState<IContact>();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: IContact) => {
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome de contato obrigatório.'),
          phone: Yup.string().required('Telefone obrigatório.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        console.log(contacts);
        const contactsArray = contacts;
        const contact: IContact = {
          name: data.name,
          phone: data.phone,
        };
        contactsArray.push(contact);
        console.log(contactsArray);
        const newContacts = mergeSort(contactsArray, searchName ? 'name' : 'phone');
        setContacts(newContacts);
        localStorage.setItem('contactsArray', JSON.stringify(newContacts));

        console.log(data);
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          // console.log(error);
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
          // console.log(errors);
        }
      }
    },
    [],
  );

  useEffect(() => {
    const contactsArray: IContact[] = JSON.parse(localStorage.getItem('contactsArray') || '[]');
    const newContacts = mergeSort(contactsArray, searchName ? 'name' : 'phone')
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
        <StyledForm onSubmit={handleSubmit} ref={formRef}>
          <h1>Cadastrar contato</h1>
          <Input name="name" placeholder="Nome Completo" />
          <InputMask
            name="phone"
            mask="(99) 9 9999-9999"
            placeholder="Telefone"
          />
          <button onClick={() => formRef.current?.submitForm()}>Cadastrar</button>
        </StyledForm>
      </Modal>
    </Container>
  );
}

export default App;

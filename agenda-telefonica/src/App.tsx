import React, { useState, useRef, useCallback } from 'react';
import { Container, Header, Button, StyledForm } from './styles';
import { Search, Modal, Input, InputMask } from '~/components';
import './App.css';
import { FormHandles } from '@unform/core';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { IoMdPersonAdd, IoMdSettings } from 'react-icons/io';
import getValidationErrors from '~/validators/getValidationsErrors';

const App: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data) => {
      try {
        const schema = Yup.object().shape({
          nome: Yup.string().required('Nome de contato obrigatório.'),
          telefone: Yup.string().required('Telefone obrigatório.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        // console.log(data);
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          Object.values(errors).forEach((value: string) => {
            toast.error(`${value}`);
          });

          formRef.current?.setErrors(errors);
          // console.log(errors);
        }
        if (error?.response?.status === 400) {
          toast.success('modelo de envio');
        }
      }
    },
    [],
  );

  return (
    <>
      <ToastContainer />
      <Container>
        <Header>
          <Search />
          <Button style={{marginRight: 10}}>
            <IoMdSettings size={30} />
          </Button>
          <Button onClick={()=>{setModalVisible(true)}}>
          <IoMdPersonAdd size={30} />
          </Button>
        </Header>
        <Modal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          btnClose={true}
        >
          <StyledForm onSubmit={handleSubmit} ref={formRef}>
            <h1>Cadastrar contato</h1>
            <Input name="nome" placeholder="Nome Completo" />
            <InputMask
              name="telefone"
              mask="(99) 9 9999-9999"
              placeholder="Telefone"
            />
            <button onClick={() => formRef.current?.submitForm()}>Cadastrar</button>
          </StyledForm>
        </Modal>
      </Container>
    </>
  );
}

export default App;

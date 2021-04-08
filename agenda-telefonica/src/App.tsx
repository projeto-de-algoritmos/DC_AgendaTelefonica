import React from 'react';
import { Container, Header } from './styles';
import { Search } from '~/components';
import './App.css';

const App: React.FC = () => {
  return (
    <Container>
      <Header>
        <Search />
      </Header>
    </Container>
  );
}

export default App;

import React from 'react';
import IContact from '~/interfaces/IContact';

import { Container, Circle, Data } from './styles';

interface IProps {
  contact: IContact;
}


const UserCard: React.FC<IProps> = ({contact}) => {
  return (
    <Container>
      <Circle><p>{contact.name.slice(0, 2)}</p></Circle>
      <Data>
        <h1>{contact.name}</h1>
        <p>{contact.phone}</p>
      </Data>
    </Container>
  );
};

export default UserCard;

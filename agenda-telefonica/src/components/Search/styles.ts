import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledForm = styled(Form)`
  height: 100%;
  display: flex; 
  justify-content: center; 
  align-items: center;
`;

export const Button = styled.button`
  height: 40px;
  width: 40px;
  outline: none;
  border: none;

  svg {
    color: #009F8B;
  }
`;

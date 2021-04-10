import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #E5DED5;
`;

export const Header = styled.div`
  width: 100%;
  min-height: 90px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  background-color: #EDEDED;
`;

export const Button = styled.button`
  height: 40px;
  width: 40px;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover{
    border-radius: 50%;
    background-color: #D9D9D9;
  }

  &:active{
    box-shadow: 3px 3px 5px 1px rgba(0,0,0,0.15)
  }

  svg {
    color: #009F8B;
  }
`;

export const StyledForm = styled(Form)`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h1 {
    font-family: 'Ubuntu';
    font-weight: 600;
  }

  button {
    max-width: 294px;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7.4rem;
    background-color: #009F8B;
    outline: none;
    border: none;
    color: #fff;
    font-family: 'Ubuntu';
    font-weight: 600;
    font-size: 1.3rem;

    &:hover{
      background-color: #00CBA8;
    }

    &:active{
      box-shadow: 3px 3px 5px 1px rgba(0,0,0,0.15)
    }
  }
`;
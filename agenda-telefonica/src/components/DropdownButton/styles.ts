import styled, { css } from 'styled-components';

interface ButtonProps {
  isActive: boolean;
}

export const Button = styled.div`
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

export const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  top: 68px;
  right: 70px;
  position: absolute;
`;

export const DropButton = styled.button<ButtonProps>`
    width: 140px;
    height: 40px;
    background-color: #fff;
    border: 0.25px solid #e9e9e9;
    font-family: 'Ubuntu';
    font-size: 14px;
    outline: none;
    border: none;

    ${(props) =>
    props.isActive &&
    css`
      background-color: #D1FFC6;
    `}
`;


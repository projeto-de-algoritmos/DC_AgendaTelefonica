import styled from 'styled-components';

export const Container = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 0.5px solid #009F8B;
`;

export const Circle = styled.div`
  height: 48px;
  width: 48px;
  margin-right: 15px;
  border-radius: 50%;
  background-color: #009F8B;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #fff;
    font-family: 'Ubuntu';
    font-size: 19px;
    font-weight: 500;
  }
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: #000;
    font-family: 'Ubuntu';
    font-size: 14px;
    font-weight: 500;
  }
  p {
    color: #757575;
    font-family: 'Ubuntu';
    font-size: 13px;
    font-weight: 500;
  }
`;
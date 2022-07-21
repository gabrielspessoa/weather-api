import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  gap: 12px;
  align-items: center;
  background-color: #0077ff;
  color: #fff;
  padding: 10px 32px;
  border: 0;
  border-radius: 30px;
  box-shadow: 0 2px 6px 0 #0000003b;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: #0650a5;
  }

  &:focus {
    outline-offset: 2px;
    outline: 2px solid #0077ff;
  }
`;

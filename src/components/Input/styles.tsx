import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  display: flex;
  height: 46px;
  padding: 0 16px;
  background-color: #fff;
  border: 2px solid #fff;
  border-radius: 30px;
  box-shadow: 0 2px 6px 0 #0000003b;
  box-sizing: border-box;
  font-family: 'Lato';
  line-height: 46px;
  transition: 0.15s border ease-in-out;

  &:hover {
    border: 2px solid #aaa;
  }

  &:focus {
    border: 2px solid #000;
    outline: 0;
  }
`;

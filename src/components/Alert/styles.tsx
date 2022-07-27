import styled from 'styled-components';
import { AlertProps } from '.';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

function getColor(color: string | null) {
  switch (color) {
    case 'error':
      return '#a1353a';
    default:
      return '#000';
  }
}

export const Alert = styled.div<AlertProps>`
  position: absolute;
  top: ${(props) => (props.visible == false ? '-35px' : '0px')};
  right: 0;
  background-color: ${(props) =>
    props.errorColor ? getColor(props.errorColor) : getColor(null)};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: 'Roboto Mono', sans-serif;
  width: 100%;
  height: 30px;
  transition: top 0.2s ease-in-out;
`;

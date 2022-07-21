import styled from 'styled-components';
import { ContainerProps } from '.';

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: ${(props) => (props.centered ? 'center' : 'start')};
  gap: ${(props) => (props.gap ? props.gap + 'px' : 0)};
  margin: ${(props) => (props.margin ? props.margin : '18px 144px')};
`;

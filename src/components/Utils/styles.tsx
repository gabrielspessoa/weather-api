import styled from 'styled-components';
import { ContainerProps } from '.';

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: ${(props) => (props.centered ? 'center' : 'start')};
  gap: ${(props) => (props.gap ? props.gap + 'px' : 0)};
  margin: ${(props) => (props.margin ? props.margin : '18px 144px')};
`;

export const Background = styled.div`
  overflow: auto;

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: auto;
    background: url('/assets/images/background.jpg') center/cover repeat;
    filter: brightness(0.6);
    z-index: -10;
  }
`;

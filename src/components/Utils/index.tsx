import { memo } from 'react';
import * as Styled from './styles';

export interface ContainerProps {
  children?: JSX.Element | JSX.Element[];
  centered?: boolean;
  gap?: number;
  margin?: string;
}

export const Container = memo(function Container(props: ContainerProps) {
  return <Styled.Container {...props}>{props.children}</Styled.Container>;
});

export const Background = memo(function Background() {
  return <Styled.Background />;
});

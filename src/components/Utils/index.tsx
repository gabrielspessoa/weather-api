import * as Styled from './styles';

export interface ContainerProps {
  children?: JSX.Element | JSX.Element[];
  centered?: boolean;
  gap?: number;
  margin?: string;
}

export function Container(props: ContainerProps) {
  return <Styled.Container {...props}>{props.children}</Styled.Container>;
}

export function Background() {
  return <Styled.Background />;
}

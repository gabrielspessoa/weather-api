import { ButtonHTMLAttributes } from 'react';
import * as Styled from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {}

export default function Button(props: ButtonProps) {
  return <Styled.Button {...props}>{props.children}</Styled.Button>;
}

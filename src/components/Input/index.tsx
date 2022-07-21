import { InputHTMLAttributes } from 'react';
import * as Styled from './styles';

interface InputProps extends InputHTMLAttributes<HTMLElement> {}

export default function Input(props: InputProps) {
  return <Styled.Input {...props}>{props.children}</Styled.Input>;
}

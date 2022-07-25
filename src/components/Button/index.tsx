import { ButtonHTMLAttributes, memo } from 'react';
import * as Styled from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {}

const Button = memo(function Button(props: ButtonProps) {
  return <Styled.Button {...props}>{props.children}</Styled.Button>;
});

export default Button;

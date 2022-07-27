import { memo } from 'react';
import * as Styled from './styles';

export interface AlertProps {
  visible?: boolean | null;
  errorColor?: string | null;
  msg?: string;
}

function Alert(props: AlertProps) {
  return (
    <Styled.Container>
      <Styled.Alert visible={props.visible} errorColor={props.errorColor}>
        {props.msg ? props.msg : 'Erro desconhecido'}
      </Styled.Alert>
    </Styled.Container>
  );
}

export default memo((props: AlertProps) => Alert(props));

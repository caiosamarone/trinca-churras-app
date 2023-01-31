import React from 'react';

import { ModalProps as AntdModalProps } from 'antd';
import * as S from './styles';

interface ModalProps extends AntdModalProps {
  formName?: string;
}

const DefaultModal: React.FC<ModalProps> = ({
  children,
  closable = false,
  formName,
  okText = 'Salvar',
  width = 400,
  ...props
}) => {
  return (
    <S.Modal
      closable={closable}
      okText={okText}
      okButtonProps={{
        form: formName,
        htmlType: 'submit',
        shape: 'round',
        type: 'primary',
        style: { backgroundColor: 'black' },
      }}
      cancelButtonProps={{ shape: 'round' }}
      cancelText="Fechar"
      width={width}
      {...props}
    >
      {children}
    </S.Modal>
  );
};

DefaultModal.defaultProps = {
  formName: 'defaultModal',
};

export { DefaultModal };

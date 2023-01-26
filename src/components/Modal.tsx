import React from 'react';

import { ModalProps as AntdModalProps, Modal as AntModal } from 'antd';
import styled from 'styled-components';

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
    <Modal
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
    </Modal>
  );
};

DefaultModal.defaultProps = {
  formName: 'defaultModal',
};

export { DefaultModal };

export const Modal = styled(AntModal)`
  .ant-modal-content {
    border-radius: 0.5rem;
    overflow: hidden;
    padding: 10px;
  }

  .ant-modal-header {
    padding: 1.5rem;
    border: 0;

    .ant-modal-title {
      font-size: 1.5rem;
    }
  }

  .ant-modal-body {
    padding: 1.5rem 1.5rem 1rem;
  }

  .ant-modal-footer {
    padding: 0 1.5rem 1.5rem;
    border: 0;
  }
`;

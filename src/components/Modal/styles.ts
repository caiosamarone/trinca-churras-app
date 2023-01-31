import styled from 'styled-components';
import { Modal as AntModal } from 'antd';

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

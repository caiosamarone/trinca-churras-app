import styled from 'styled-components';
import { Form as AntForm } from 'antd';

export const Form = styled(AntForm)`
  min-width: 280px;
  margin-top: 24px;
  @media (max-width: 768px) {
    min-width: unset;
  }
`;

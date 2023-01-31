import styled from 'styled-components';
import { Typography as AntTypography } from 'antd';

const { Paragraph } = AntTypography;

export const ItemsWrapper = styled.div`
  display: flex;
  gap: 8px;
  border-bottom: 1px solid rgba(229, 194, 49, 0.5);
  padding: 6px;
  justify-content: space-between;
`;

export const PersonName = styled(Paragraph)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 240px;
  font-size: 21px;
  margin: 0px !important;
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

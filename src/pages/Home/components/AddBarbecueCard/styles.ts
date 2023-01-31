import styled from 'styled-components';
import { Typography as AntTypography, Card as CardAnt } from 'antd';

const { Paragraph } = AntTypography;

export const Card = styled(CardAnt)`
  width: 282px;
  border-radius: 12px;
  height: 192px;
  cursor: pointer;
  background: ${({ theme }) => theme.palette.background.main};
`;

export const Title = styled(Paragraph)`
  font-size: 21px;
  margin: 0px !important;
`;

export const IconWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main};
  width: 90px;
  height: 90px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
`;

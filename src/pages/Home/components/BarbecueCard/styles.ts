import styled from 'styled-components';
import { Typography as AntTypography, Card as CardAnt } from 'antd';

const { Paragraph } = AntTypography;

export const Card = styled(CardAnt)`
  width: 282px;
  height: 192px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
`;

export const BarbecueTitle = styled(Paragraph)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 240px;
  font-size: 21px;
  margin: 0px !important;
`;

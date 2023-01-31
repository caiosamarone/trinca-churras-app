import styled from 'styled-components';
import { Form as AntForm, Typography as AntTypography, Typography } from 'antd';

const { Paragraph } = AntTypography;

export const Form = styled(AntForm)`
  min-width: 280px;
  margin-top: 24px;
  @media (max-width: 768px) {
    min-width: unset;
  }
`;

export const ContributionValue = styled(Paragraph)`
  font-size: 16px;
  margin-top: 12px;
  margin-bottom: 0px;
`;

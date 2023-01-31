import styled from 'styled-components';
import { Typography as AntTypography } from 'antd';
import { LogoutOutlined as AntLogoutIcon } from '@ant-design/icons';

const { Title: AntTitle } = AntTypography;

export const Wrapper = styled.header`
  width: 100%;
  background-image: url('bbq-pattern.svg');
  height: 203px;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const Title = styled(AntTitle)`
  font-size: 32px !important;
  position: relative;
  margin-top: 4.5rem;
  font-weight: bold !important;
`;

export const LogoutIcon = styled(AntLogoutIcon)`
  position: absolute;
  font-size: 22px;
  top: 80px;
  right: 20px;
  cursor: pointer;
  @media (max-width: 768px) {
    top: 20px;
    right: 15px;
  }
`;

export const HeaderContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
`;

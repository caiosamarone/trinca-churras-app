import styled from 'styled-components';
import { Typography as AntTypography, Button as AntButton, Input as AntInput } from 'antd';

const { Title: AntTitle } = AntTypography;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main};
  height: 100vh;
  .label__password,
  .label__email {
    font-weight: bold;
  }
`;
export const ContentWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: -280px;
  @media (max-width: 768px) {
    margin-top: -60px;
  }
`;

export const Title = styled(AntTitle)`
  font-size: 32px !important;
  font-weight: bold !important;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  margin-bottom: 1rem;
  gap: 12px;
`;

export const Button = styled(AntButton)`
  width: 100%;
  background-color: black;
  border-radius: 18px;
  margin-top: 12px;
  &:hover {
    background-color: ${({ theme }) => theme.palette.text.primary} !important;
    border-color: ${({ theme }) => theme.palette.text.white} !important;
  }
`;

export const Input = styled(AntInput)`
  &:hover {
    border-color: #6a6133 !important;
  }
  .ant-input-password {
    border-color: #6a6133 !important;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  background-image: linear-gradient(to bottom, transparent 60%, #ffd836 100%), url(bbq-pattern.svg);
`;
export const BackgroundIcon = styled.img`
  width: 100%;
  opacity: 0;
`;

export const TrincaIcon = styled.img`
  margin-top: 5rem;
`;

import styled from 'styled-components';
import { Button as ButtonAnt, Typography as AntTypography, Card as AntCard } from 'antd';

const { Title, Paragraph } = AntTypography;

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PariticpantsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 2rem;
`;

export const BarbecueTitle = styled(Title)`
  font-size: 36px !important;
  max-width: 390px;
  margin: 0px !important;
  @media (max-width: 768px) {
    max-width: unset;
  }
`;

export const BackButton = styled(ButtonAnt)`
  margin-bottom: 1rem;
  &:hover {
    border-color: ${({ theme }) => theme.palette.primary.main} !important;
    color: ${({ theme }) => theme.palette.text.primary} !important;
  }
`;

export const AddParticipanButton = styled(ButtonAnt)`
  width: 100%;
  background-color: black;
  border-radius: 18px;
  margin-top: 2rem;
  max-width: 220px;
  &:hover {
    background-color: ${({ theme }) => theme.palette.text.primary} !important;
    border-color: ${({ theme }) => theme.palette.text.white} !important;
  }
`;

export const DetailsMobileInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const DescriptionText = styled(Paragraph)`
  font-size: 17px;
  margin: 0px !important;
`;

export const PeopleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Card = styled(AntCard)`
  width: 100%;
  border-radius: 2px;
  height: 100%;
  margin-top: -40px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;

export const ContainerEmptyData = styled.div`
  margin-top: 32px;
`;

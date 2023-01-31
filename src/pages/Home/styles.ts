import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.palette.background.main};
  padding-bottom: 12px;
`;
export const ContentWrapper = styled.div`
  max-width: 588px;
  margin: 0 auto;
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: -40px;
  padding-bottom: 12px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    padding-bottom: 20px;
  }
`;

export const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.palette.background.main};
  padding-bottom: 12px;
`;

export const ContentWrapper = styled.div`
  max-width: 588px;
  margin: 0 auto;
  text-align: center;
`;

export const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const TrincaIcon = styled.img`
  margin-top: 5rem;
`;

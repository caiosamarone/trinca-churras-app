import { Typography } from 'antd';
import { TrincaLogo } from 'assets/icons';
import Header from 'modules/Header';
import styled from 'styled-components';

const NotFound: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
        <Typography.Title>404 - Página não encontrada =(</Typography.Title>
      </ContentWrapper>
      <LogoWrapper>
        <img src={TrincaLogo} style={{ marginTop: '5rem' }} />
      </LogoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.palette.background.main};
  padding-bottom: 12px;
`;

const ContentWrapper = styled.div`
  max-width: 588px;
  margin: 0 auto;
  text-align: center;
`;

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export default NotFound;

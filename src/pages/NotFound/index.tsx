import { TrincaLogo } from 'assets/icons';
import { Header } from 'modules';

import { Typography } from 'antd';
import * as S from './styles';

const NotFound: React.FC = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.ContentWrapper>
        <Typography.Title>404 - Página não encontrada =(</Typography.Title>
      </S.ContentWrapper>
      <S.LogoWrapper>
        <S.TrincaIcon src={TrincaLogo} />
      </S.LogoWrapper>
    </S.Wrapper>
  );
};

export { NotFound };

import { useNavigate } from 'react-router-dom';

import { Tooltip as AntTooltip } from 'antd';
import * as S from './styles';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
    localStorage.setItem('user', '');
  };
  return (
    <S.Wrapper>
      <S.HeaderContainer>
        <S.Title>Agenda de Churras</S.Title>
        <AntTooltip title="Sair">
          <S.LogoutIcon onClick={handleLogout} />
        </AntTooltip>
      </S.HeaderContainer>
    </S.Wrapper>
  );
};

export { Header };

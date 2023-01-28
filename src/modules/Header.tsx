import { BBQTitle } from 'assets/icons';
import styled from 'styled-components';
import { Tooltip, Typography } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title: AntTitle } = Typography;
const Header: React.FC = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
    localStorage.setItem('user', '');
  };
  return (
    <Wrapper>
      <img src={BBQTitle} style={{ width: '100%', height: '203px' }} />
      <div
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <Title>Agenda de Churras</Title>
        <Tooltip title="Sair">
          <LogoutIcon onClick={handleLogout} />
        </Tooltip>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  height: 203px;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

const Title = styled(AntTitle)`
  font-size: 32px !important;
  position: relative;
  margin-top: -150px;
  font-weight: bold !important;
`;

const LogoutIcon = styled(LogoutOutlined)`
  position: absolute;
  font-size: 20px;
  top: -140px;
  right: 20px;
  cursor: pointer;
  @media (max-width: 768px) {
    top: -180px;
    right: 10px;
  }
`;
export default Header;

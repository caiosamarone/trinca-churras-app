import { BBQTitle } from 'assets/icons';
import styled from 'styled-components';
import { Typography } from 'antd';

const { Title: AntTitle } = Typography;
const Header: React.FC = () => {
  return (
    <Wrapper>
      <img src={BBQTitle} style={{ width: '100%', height: '203px' }} />
      <div
        style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', justifyContent: 'center' }}
      >
        <Title>Agenda de Churras</Title>
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
`;
export default Header;

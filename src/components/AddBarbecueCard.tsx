import { Card, Typography } from 'antd';
import styled from 'styled-components';
import { IconBBQ, IconMoney, IconPeople } from 'assets/icons';
const { Paragraph } = Typography;

const AddBarbecueCard: React.FC = () => {
  return (
    <Card
      style={{
        width: '282px',
        borderRadius: '2px',
        height: '192px',
        cursor: 'pointer',
        background: '#F1F1F1',
      }}
      hoverable
      onClick={() => console.log('clicked')}
      bodyStyle={{
        height: '100%',
        padding: '18px',
        background: '#F1F1F1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <IconWrapper>
        <img src={IconBBQ} alt="BBQ Icon" />
      </IconWrapper>
      <Title>Adicionar Churras</Title>
    </Card>
  );
};

export default AddBarbecueCard;

const Title = styled(Paragraph)`
  font-size: 21px;
  margin: 0px !important;
`;

const IconWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main};
  width: 90px;
  height: 90px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
`;
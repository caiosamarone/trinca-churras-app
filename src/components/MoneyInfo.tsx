import { IconMoney } from 'assets/icons';
import styled from 'styled-components';

interface Props {
  value: string | undefined;
}

const MoneyInfo: React.FC<Props> = ({ value }) => {
  return (
    <ItemsWrapper>
      <img src={IconMoney} alt="Money Icon" style={{ height: '20px' }} />
      <AmountValue>R$ {value}</AmountValue>
    </ItemsWrapper>
  );
};

const ItemsWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const AmountValue = styled.p`
  font-size: 21px;
  margin: 0;
`;

export default MoneyInfo;

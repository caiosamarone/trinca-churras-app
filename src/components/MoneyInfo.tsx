import { IconMoney } from 'assets/icons';
import styled from 'styled-components';
import { formatNumberToBrlString } from 'utils/formatCurreny';

interface Props {
  value: number | undefined;
}

const MoneyInfo: React.FC<Props> = ({ value }) => {
  const handleMoneyInfo = () => {
    if (value) {
      return formatNumberToBrlString(value);
    }
  };

  return (
    <ItemsWrapper>
      <img src={IconMoney} alt="Money Icon" style={{ height: '20px' }} />
      {value === 0 && <AmountValue>R$ 0</AmountValue>}
      {value !== 0 && <AmountValue>{handleMoneyInfo()}</AmountValue>}
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

export { MoneyInfo };

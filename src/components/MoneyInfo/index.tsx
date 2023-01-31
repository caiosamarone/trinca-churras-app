import { IconMoney } from 'assets/icons';
import { formatNumberToBrlString } from 'utils/formatCurreny';

import { Tooltip } from 'antd';
import * as S from './styles';

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
    <Tooltip title={`${value === 0 ? 'Ninguém contribuiu ainda =(' : 'Total arrecadado'}`}>
      <S.ItemsWrapper>
        <S.MoneyIcon src={IconMoney} alt="Money Icon" />
        {value === 0 && <S.AmountValue>R$ 0</S.AmountValue>}
        {value !== 0 && <S.AmountValue>{handleMoneyInfo()}</S.AmountValue>}
      </S.ItemsWrapper>
    </Tooltip>
  );
};

export { MoneyInfo };

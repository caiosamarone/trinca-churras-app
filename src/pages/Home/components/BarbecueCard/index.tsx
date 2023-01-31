import { SetStateAction, useState, useEffect, useCallback } from 'react';

import { IBarbecue, useGlobalContext } from 'contexts/GlobalContext';

import { MoneyInfo, ParticipantsInfo } from 'components';
import { PrimaryTitle } from 'components/Title';
import * as S from './styles';
import { Card } from 'antd';

interface BarbecueCardProps {
  barbecue: IBarbecue;
  selectBarbecue: React.Dispatch<SetStateAction<IBarbecue>>;
}

const BarbecueCard: React.FC<BarbecueCardProps> = ({ barbecue, selectBarbecue }) => {
  const { barbecue: barbecueContext } = useGlobalContext();
  const splitted = barbecue.date.split('/');
  const formatted = `${splitted[0]}/${splitted[1]}`;
  const [totalAmount, setTotalAmount] = useState(0);
  const calculateAmountTotal = useCallback(() => {
    if (!!barbecue?.peopleList?.length) {
      const value = barbecue.peopleList.reduce(
        (acc, current) => acc + current.contributionValue,
        0,
      );
      setTotalAmount(value);
    }
  }, [barbecueContext]);
  useEffect(() => {
    calculateAmountTotal();
  }, [barbecue, calculateAmountTotal]);

  return (
    <S.Card
      hoverable
      bodyStyle={{ width: '100%', cursor: 'pointer' }}
      onClick={() => selectBarbecue(barbecue)}
    >
      <PrimaryTitle text={formatted} />

      <S.BarbecueTitle>{barbecue.title}</S.BarbecueTitle>
      <S.Footer>
        <ParticipantsInfo value={barbecue?.peopleList?.length} />
        <MoneyInfo value={totalAmount || 0} />
      </S.Footer>
    </S.Card>
  );
};

export { BarbecueCard };

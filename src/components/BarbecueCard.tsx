import { IBarbecue, useGlobalContext } from 'contexts/GlobalContext';
import { Card, Typography } from 'antd';
import styled from 'styled-components';

import { SetStateAction, useState, useEffect, useCallback } from 'react';
import { PrimaryTitle } from './PrimaryTitle';
import { ParticipantsInfo } from './ParticipantsInfo';
import { MoneyInfo } from './MoneyInfo';

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
    <Card
      style={{ width: '282px', borderRadius: '2px', height: '192px' }}
      hoverable
      bodyStyle={{ height: '100%', padding: '18px', cursor: 'pointer' }}
      onClick={() => selectBarbecue(barbecue)}
    >
      <PrimaryTitle text={formatted} />

      <BarbecueTitle>{barbecue.title}</BarbecueTitle>
      <Footer>
        <ParticipantsInfo value={barbecue?.peopleList?.length} />
        <MoneyInfo value={totalAmount || 0} />
      </Footer>
    </Card>
  );
};

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
`;

const BarbecueTitle = styled(Typography.Paragraph)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 240px;
  font-size: 21px;
  margin: 0px !important;
`;

export { BarbecueCard };

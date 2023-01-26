import { IBarbecue } from 'contexts/GlobalContext';
import { Card } from 'antd';
import styled from 'styled-components';

import { SetStateAction } from 'react';
import ParticipantsInfo from './ParticipantsInfo';
import MoneyInfo from './MoneyInfo';
import PrimaryTitle from './PrimaryTitle';
import SecondaryTitle from './SecondaryTitle';
import dayjs from 'dayjs';

interface BarbecueCardProps {
  barbecue: IBarbecue;
  selectBarbecue: React.Dispatch<SetStateAction<IBarbecue>>;
}

const BarbecueCard: React.FC<BarbecueCardProps> = ({ barbecue, selectBarbecue }) => {
  const splitted = barbecue.date.split('/');
  const formatted = `${splitted[0]}/${splitted[1]}`;

  return (
    <Card
      style={{ width: '282px', borderRadius: '2px', height: '192px' }}
      hoverable
      bodyStyle={{ height: '100%', padding: '18px', cursor: 'pointer' }}
      onClick={() => selectBarbecue(barbecue)}
    >
      <PrimaryTitle text={formatted} />
      <SecondaryTitle text={barbecue.title} wrapText />
      <Footer>
        <ParticipantsInfo value={barbecue?.peopleList?.length} />
        <MoneyInfo value={barbecue.totalAmount} />
      </Footer>
    </Card>
  );
};

export default BarbecueCard;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

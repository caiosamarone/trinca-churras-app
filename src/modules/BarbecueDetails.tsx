import { Button, Card, Typography } from 'antd';
import MoneyInfo from 'components/MoneyInfo';
import ParticipantsInfo from 'components/ParticipantsInfo';
import PersonInfo from 'components/PersonInfo';
import PrimaryTitle from 'components/PrimaryTitle';
import { IBarbecue } from 'contexts/GlobalContext';
import styled from 'styled-components';

interface BarbecueDetailsProps {
  barbecue: IBarbecue;
  onClose: () => void;
}

const BarbecueDetails: React.FC<BarbecueDetailsProps> = ({ barbecue, onClose }) => {
  return (
    <Card
      style={{ width: '100%', borderRadius: '2px', height: '100%', marginTop: '-40px' }}
      bodyStyle={{ height: '100%', padding: '18px' }}
    >
      <Button onClick={onClose}>Voltar</Button>
      <WrapperHeader>
        <PrimaryTitle text={barbecue.date} />
        <ParticipantsInfo value={barbecue.peopleList?.length} />
      </WrapperHeader>
      <WrapperHeader>
        <BarbecueTitle>{barbecue.title}</BarbecueTitle>

        <MoneyInfo value={barbecue.totalAmount} />
      </WrapperHeader>

      <PariticpantsWrapper>
        {barbecue.peopleList?.map(person => (
          <PersonInfo
            id={person.id}
            key={person.id}
            name={person.name}
            contributionValue={person.contributionValue}
          />
        ))}
      </PariticpantsWrapper>
    </Card>
  );
};

export default BarbecueDetails;

const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PariticpantsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const BarbecueTitle = styled(Typography.Title)`
  font-size: 32px;
  /* overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis; */
  max-width: 390px;
`;

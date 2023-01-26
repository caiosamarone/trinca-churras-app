import { Button, Card, Typography } from 'antd';
import MoneyInfo from 'components/MoneyInfo';
import ParticipantsInfo from 'components/ParticipantsInfo';
import PersonInfo from 'components/PersonInfo';
import PrimaryTitle from 'components/PrimaryTitle';
import SecondaryTitle from 'components/SecondaryTitle';
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
      <BackButton onClick={onClose}>Voltar</BackButton>
      <WrapperHeader>
        <PrimaryTitle text={barbecue.date} />
        <ParticipantsInfo value={barbecue.peopleList?.length} />
      </WrapperHeader>
      <WrapperHeader>
        <BarbecueTitle id="title__event">{barbecue.title}</BarbecueTitle>

        <MoneyInfo value={barbecue.totalAmount} />
      </WrapperHeader>
      {!!barbecue.peopleList?.length ? (
        <PariticpantsWrapper>
          {barbecue.peopleList?.map(person => (
            <PersonInfo
              id={person.id}
              key={person.id}
              name={person.name}
              contributionValue={person.contributionValue}
              alreadyPaid={person.alreadyPaid}
            />
          ))}
        </PariticpantsWrapper>
      ) : (
        <div style={{ marginTop: '32px' }}>
          <SecondaryTitle text="Nenhum participante foi registrado ainda =( " />
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <AddParticipanButton type="primary">Adicionar Participante</AddParticipanButton>
      </div>
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
  margin-top: 2rem;
`;

const BarbecueTitle = styled(Typography.Title)`
  font-size: 32px;
  max-width: 390px;
  margin: 0px !important;
`;

const BackButton = styled(Button)`
  margin-bottom: 1rem;
  &:hover {
    border-color: ${({ theme }) => theme.palette.primary.main} !important;
    color: black !important;
  }
`;

const AddParticipanButton = styled(Button)`
  width: 100%;
  background-color: black;
  border-radius: 18px;
  margin-top: 2rem;
  max-width: 220px;
  &:hover {
    /* opacity: 0.6; */
    background-color: black !important;
    border-color: white !important;
  }
`;

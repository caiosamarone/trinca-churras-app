import { IconPeople } from 'assets/icons';
import styled from 'styled-components';

interface Props {
  value: number | undefined;
}

const ParticipantsInfo: React.FC<Props> = ({ value }) => {
  return (
    <ItemsWrapper>
      <img src={IconPeople} alt="People Icon" />
      <AmountParticipants>{value}</AmountParticipants>
    </ItemsWrapper>
  );
};

const ItemsWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
`;

const AmountParticipants = styled.p`
  font-size: 21px;
`;

export default ParticipantsInfo;

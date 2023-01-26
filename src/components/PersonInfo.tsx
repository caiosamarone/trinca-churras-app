import { IParticipant } from 'contexts/GlobalContext';
import styled from 'styled-components';
import SecondaryTitle from './SecondaryTitle';

const PersonInfo: React.FC<IParticipant> = ({ id, name, contributionValue }) => {
  return (
    <ItemsWrapper>
      <SecondaryTitle wrapText text={name} />
      <div>
        <SecondaryTitle text={`R$ ${contributionValue}`} />
      </div>
    </ItemsWrapper>
  );
};

const ItemsWrapper = styled.div`
  display: flex;
  gap: 8px;
  border-bottom: 1px solid rgba(229, 194, 49, 0.5);
  padding: 6px;
  justify-content: space-between;
`;

export default PersonInfo;

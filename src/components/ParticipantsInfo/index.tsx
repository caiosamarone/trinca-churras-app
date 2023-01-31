import { IconPeople } from 'assets/icons';
import * as S from './styles';

interface Props {
  value: number | undefined;
}

const ParticipantsInfo: React.FC<Props> = ({ value }) => {
  return (
    <S.ItemsWrapper>
      <img src={IconPeople} alt="People Icon" />
      <S.AmountParticipants>{value}</S.AmountParticipants>
    </S.ItemsWrapper>
  );
};

export { ParticipantsInfo };

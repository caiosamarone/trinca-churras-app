import * as S from './styles';
import { IconBBQ } from 'assets/icons';

interface Props {
  handleClick: () => void;
}

const AddBarbecueCard: React.FC<Props> = ({ handleClick }) => {
  return (
    <S.Card
      hoverable
      onClick={handleClick}
      bodyStyle={{
        height: '100%',
        padding: '18px',
        background: '#F1F1F1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '12px',
      }}
    >
      <S.IconWrapper>
        <img src={IconBBQ} alt="BBQ Icon" />
      </S.IconWrapper>
      <S.Title>Adicionar Churras</S.Title>
    </S.Card>
  );
};

export { AddBarbecueCard };

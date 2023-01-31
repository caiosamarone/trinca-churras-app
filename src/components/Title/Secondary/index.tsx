import * as S from './styles';

interface Props {
  text: string;
  wrapText?: boolean;
  alreadyPaid?: boolean;
  personName?: boolean;
}

const SecondaryTitle: React.FC<Props> = ({ text, alreadyPaid = true, personName = false }) => {
  return (
    <S.Title style={{ textDecoration: alreadyPaid && personName ? 'line-through' : 'unset' }}>
      {text}
    </S.Title>
  );
};

export { SecondaryTitle };

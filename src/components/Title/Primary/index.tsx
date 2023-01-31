import * as S from './styles';

interface Props {
  text: string;
}

const PrimaryTitle: React.FC<Props> = ({ text }) => {
  return <S.Title>{text}</S.Title>;
};

export { PrimaryTitle };

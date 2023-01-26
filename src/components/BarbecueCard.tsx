import { IBarbecue } from 'contexts/GlobalContext';

const BarbecueCard: React.FC<IBarbecue> = ({
  id,
  title,
  description,
  totalAmount,
  observation,
  peopleList,
}) => {
  return <div>{title}</div>;
};

export default BarbecueCard;

import { Typography } from 'antd';
import styled from 'styled-components';
const { Paragraph } = Typography;

interface Props {
  text: string;
  wrapText?: boolean;
  alreadyPaid?: boolean;
  personName?: boolean;
}

const SecondaryTitle: React.FC<Props> = ({ text, alreadyPaid = true, personName = false }) => {
  return (
    <Title style={{ textDecoration: alreadyPaid && personName ? 'line-through' : 'unset' }}>
      {text}
    </Title>
  );
};

const Title = styled(Paragraph)`
  font-size: 21px;
  margin: 0px !important;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 240px;
`;

export default SecondaryTitle;

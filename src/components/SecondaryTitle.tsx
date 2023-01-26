import { Typography } from 'antd';
import styled from 'styled-components';
const { Paragraph } = Typography;

interface Props {
  text: string;
  wrapText?: boolean;
}

const SecondaryTitle: React.FC<Props> = ({ text, wrapText = false }) => {
  return <Title>{text}</Title>;
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

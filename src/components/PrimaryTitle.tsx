import { Typography } from 'antd';
import styled from 'styled-components';
const { Paragraph } = Typography;

interface Props {
  text: string;
}

const PrimaryTitle: React.FC<Props> = ({ text }) => {
  return <Title>{text}</Title>;
};

const Title = styled(Paragraph)`
  font-size: 28px;
  margin: 0px !important;
  font-weight: bold !important;
`;

export { PrimaryTitle };

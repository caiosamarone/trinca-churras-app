import { Typography } from 'antd';
import styled, { css } from 'styled-components';
const { Paragraph } = Typography;

interface Props {
  text: string;
  wrapText?: boolean;
  alreadyPaid?: boolean;
  personName?: boolean;
}

const SecondaryTitle: React.FC<Props> = ({
  text,
  alreadyPaid = true,
  personName = false,
  wrapText = false,
}) => {
  return (
    <Title
      wrapText={wrapText}
      style={{ textDecoration: alreadyPaid && personName ? 'line-through' : 'unset' }}
    >
      {text}
    </Title>
  );
};

const wrapPoints = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 240px;
`;

const Title = styled(Paragraph)<{ wrapText: boolean }>`
  font-size: 21px;
  margin: 0px !important;
  ${props => (props.wrapText ? wrapPoints : null)}
`;

export default SecondaryTitle;

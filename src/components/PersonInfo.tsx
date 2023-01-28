import { IParticipant, useGlobalContext } from 'contexts/GlobalContext';
import styled from 'styled-components';

import { CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { Tooltip, Typography } from 'antd';
import { formatNumberToBrlString } from 'utils/formatCurreny';
import { SecondaryTitle } from './SecondaryTitle';

interface Props extends IParticipant {
  barbecueId: string;
}

const PersonInfo: React.FC<Props> = ({ id, name, contributionValue, alreadyPaid, barbecueId }) => {
  const { handleDeleteParticipant, checkParticipantPaid } = useGlobalContext();

  return (
    <ItemsWrapper>
      <PersonName style={{ textDecoration: alreadyPaid ? 'line-through' : 'unset' }}>
        {name}
      </PersonName>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <SecondaryTitle
          text={`${formatNumberToBrlString(contributionValue)}`}
          alreadyPaid={alreadyPaid}
          personName
        />

        <Tooltip
          title={alreadyPaid ? 'Este participante já pagou' : 'Marcar que participante já pagou'}
        >
          <CheckCircleOutlined
            disabled={alreadyPaid}
            onClick={() => checkParticipantPaid(barbecueId, id)}
            style={{ cursor: 'pointer', fontSize: '20px', opacity: alreadyPaid ? 0.5 : 1 }}
          />
        </Tooltip>

        <Tooltip title="Remover Participante">
          <DeleteOutlined
            style={{ cursor: 'pointer', fontSize: '20px' }}
            onClick={() => {
              handleDeleteParticipant(barbecueId, id);
            }}
          />
        </Tooltip>
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

const PersonName = styled(Typography.Paragraph)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 240px;
  font-size: 21px;
  margin: 0px !important;
`;

export { PersonInfo };

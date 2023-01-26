import { IParticipant } from 'contexts/GlobalContext';
import styled from 'styled-components';
import SecondaryTitle from './SecondaryTitle';
import { CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
const PersonInfo: React.FC<IParticipant> = ({ id, name, contributionValue, alreadyPaid }) => {
  return (
    <ItemsWrapper>
      <SecondaryTitle wrapText text={name} alreadyPaid={alreadyPaid} personName />
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <SecondaryTitle text={`R$ ${contributionValue}`} alreadyPaid={alreadyPaid} personName />

        <Tooltip
          title={alreadyPaid ? 'Este participante já pagou' : 'Marcar que participante já pagou'}
        >
          <CheckCircleOutlined
            disabled
            style={{ cursor: 'pointer', fontSize: '20px', opacity: alreadyPaid ? 0.5 : 1 }}
          />
        </Tooltip>

        <Tooltip title="Remover Participante">
          <DeleteOutlined style={{ cursor: 'pointer', fontSize: '20px' }} />
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

export default PersonInfo;

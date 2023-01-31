import { IParticipant, useGlobalContext } from 'contexts/GlobalContext';
import { formatNumberToBrlString } from 'utils/formatCurrency';
import { SecondaryTitle } from 'components/Title';

import { Tooltip as AntTooltip } from 'antd';
import { CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import * as S from './styles';

interface Props extends IParticipant {
  barbecueId: string;
}

const PersonInfo: React.FC<Props> = ({ id, name, contributionValue, alreadyPaid, barbecueId }) => {
  const { handleDeleteParticipant, checkParticipantPaid } = useGlobalContext();

  return (
    <S.ItemsWrapper>
      <S.PersonName style={{ textDecoration: alreadyPaid ? 'line-through' : 'unset' }}>
        {name}
      </S.PersonName>
      <S.ActionsContainer>
        <SecondaryTitle
          text={`${formatNumberToBrlString(contributionValue)}`}
          alreadyPaid={alreadyPaid}
          personName
        />

        <AntTooltip
          title={alreadyPaid ? 'Este participante já pagou' : 'Marcar que participante já pagou'}
        >
          <CheckCircleOutlined
            disabled={alreadyPaid}
            onClick={() => checkParticipantPaid(barbecueId, id)}
            style={{ cursor: 'pointer', fontSize: '20px', opacity: alreadyPaid ? 0.5 : 1 }}
          />
        </AntTooltip>

        <AntTooltip title="Remover Participante">
          <DeleteOutlined
            style={{ cursor: 'pointer', fontSize: '20px' }}
            onClick={() => {
              handleDeleteParticipant(barbecueId, id);
            }}
          />
        </AntTooltip>
      </S.ActionsContainer>
    </S.ItemsWrapper>
  );
};

export { PersonInfo };

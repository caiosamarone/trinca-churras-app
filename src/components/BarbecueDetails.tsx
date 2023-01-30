import { Button, Card, Typography, Form as AntForm, Tooltip, Modal } from 'antd';
import { useCallback, useEffect, useState, useMemo } from 'react';
import {
  MoneyInfo,
  ParticipantForm,
  ParticipantsInfo,
  PersonInfo,
  PrimaryTitle,
  SecondaryTitle,
} from 'components';
import { IBarbecue, useGlobalContext } from 'contexts/GlobalContext';
import useMobile from 'hooks/useMobile';
import styled from 'styled-components';
import { DefaultModal } from './Modal';

import { formatBRLStringToNumber } from 'utils/formatCurreny';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

interface BarbecueDetailsProps {
  barbecue: IBarbecue;
  onClose: () => void;
}

const BarbecueDetails: React.FC<BarbecueDetailsProps> = ({
  barbecue: barbequeSelected,
  onClose,
}) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const { isMobile } = useMobile();
  const [barbecue, setBarbeque] = useState<IBarbecue>();
  const [addParticpantModalVisible, setAddParticipantModalVisible] = useState(false);
  const [form] = AntForm.useForm();

  const { handleAddParticipant, barbecue: bbqContext } = useGlobalContext();

  const calculateAmountTotal = useCallback(() => {
    if (!!barbecue?.peopleList?.length) {
      const value = barbecue.peopleList.reduce(
        (acc, current) => acc + current.contributionValue,
        0,
      );
      setTotalAmount(value);
    }
  }, [barbecue]);
  useEffect(() => {
    setBarbeque(bbqContext.filter(b => b.id === barbequeSelected.id)[0]);
    calculateAmountTotal();
  }, [bbqContext, calculateAmountTotal]);

  const handleCloseModal = () => {
    form.resetFields();
    setAddParticipantModalVisible(false);
  };
  const doSendForm = async () => {
    let values: any = null;
    try {
      values = await form.validateFields();
      const formattedContribution = formatBRLStringToNumber(values.contributionValue);

      if (isNaN(formattedContribution) || formattedContribution <= 0) {
        toast.error(`Valor de contribuição incorreto ou muito grande.`, {
          position: 'bottom-left',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        return;
      }

      const randomId = uuidv4();

      handleAddParticipant(
        {
          id: randomId,
          alreadyPaid: false,
          name: values.name,
          contributionValue: formattedContribution,
        },
        barbequeSelected.id,
      );

      toast.success(`${values.name} foi convidado(a)!`, {
        position: 'bottom-left',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: 'light',
      });
      handleCloseModal();
    } catch (er) {
      toast.error(`Erro =(`, {
        position: 'bottom-left',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  const listDetailsMemoized = useMemo(() => {
    return (
      <div className="container__details">
        <PrimaryTitle text={`${barbecue?.date} `} />
        <p>{isMobile ? '_________________' : ' ______________________________________________'}</p>
        <PeopleContainer style={{ display: 'flex', flexDirection: 'column' }}>
          {barbecue?.peopleList?.map(p => (
            <SecondaryTitle
              text={`${p.name} - R$ ${p.contributionValue}  ${p.alreadyPaid ? '(PAGO)' : ''}`}
            />
          ))}
        </PeopleContainer>
      </div>
    );
  }, [barbecue]);

  const info = () => {
    Modal.info({
      icon: false,
      title: <PrimaryTitle text={`${barbecue?.title} `} />,
      content: listDetailsMemoized,
      okText: 'Fechar',
      onOk() {},
    });
  };

  return (
    <Card
      style={{ width: '100%', borderRadius: '2px', height: '100%', marginTop: '-40px' }}
      bodyStyle={{ height: '100%', padding: '18px' }}
    >
      <BackButton onClick={onClose}>Voltar</BackButton>
      {isMobile ? (
        <>
          <PrimaryTitle text={barbecue?.date || ''} />
          <BarbecueTitle id="title__event">{barbecue?.title || ''}</BarbecueTitle>
          <DetailsMobileInfo>
            <ParticipantsInfo value={barbecue?.peopleList?.length} />
            <MoneyInfo value={totalAmount} />
          </DetailsMobileInfo>
        </>
      ) : (
        <>
          <WrapperHeader>
            <PrimaryTitle text={barbecue?.date || ''} />
            <ParticipantsInfo value={barbecue?.peopleList?.length || 0} />
          </WrapperHeader>
          <WrapperHeader>
            <BarbecueTitle id="title__event">{barbecue?.title || ''}</BarbecueTitle>
            <MoneyInfo value={barbecue?.peopleList?.length === 0 ? 0 : totalAmount} />
          </WrapperHeader>
        </>
      )}

      <DescriptionText> {barbecue?.description}</DescriptionText>
      {barbecue?.observation && (
        <DescriptionText>
          <b>Obs:</b> {barbecue?.observation}
        </DescriptionText>
      )}
      {!!barbecue?.peopleList?.length ? (
        <PariticpantsWrapper>
          {barbecue?.peopleList?.map(person => (
            <PersonInfo
              id={person.id}
              key={person.id}
              name={person.name}
              contributionValue={person.contributionValue}
              alreadyPaid={person.alreadyPaid}
              barbecueId={barbecue.id}
            />
          ))}
        </PariticpantsWrapper>
      ) : (
        <div style={{ marginTop: '32px' }}>
          <SecondaryTitle text="Nenhum participante foi registrado ainda =( " />
        </div>
      )}

      <ButtonContainer>
        <AddParticipanButton type="primary" onClick={() => setAddParticipantModalVisible(true)}>
          Adicionar Participante
        </AddParticipanButton>
        {!!barbecue?.peopleList?.length && (
          <Tooltip title="Veja os detalhes do evento. Copie os dados (ctrl c + ctrl v) e cole no whatsapp para compartilhar =)">
            <AddParticipanButton style={{ maxWidth: '120px' }} type="primary" onClick={info}>
              Copiar lista
            </AddParticipanButton>
          </Tooltip>
        )}
      </ButtonContainer>

      <DefaultModal
        open={addParticpantModalVisible}
        formName="participantForm"
        destroyOnClose
        onOk={doSendForm}
        onCancel={handleCloseModal}
      >
        <ParticipantForm onClose={handleCloseModal} form={form} />
      </DefaultModal>
    </Card>
  );
};

export { BarbecueDetails };

const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PariticpantsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 2rem;
`;

const BarbecueTitle = styled(Typography.Title)`
  font-size: 36px !important;
  max-width: 390px;
  margin: 0px !important;
  @media (max-width: 768px) {
    max-width: unset;
  }
`;

const BackButton = styled(Button)`
  margin-bottom: 1rem;
  &:hover {
    border-color: ${({ theme }) => theme.palette.primary.main} !important;
    color: ${({ theme }) => theme.palette.text.primary} !important;
  }
`;

const AddParticipanButton = styled(Button)`
  width: 100%;
  background-color: black;
  border-radius: 18px;
  margin-top: 2rem;
  max-width: 220px;
  &:hover {
    background-color: ${({ theme }) => theme.palette.text.primary} !important;
    border-color: ${({ theme }) => theme.palette.text.white} !important;
  }
`;

const DetailsMobileInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const DescriptionText = styled(Typography.Paragraph)`
  font-size: 17px;
  margin: 0px !important;
`;

const PeopleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;

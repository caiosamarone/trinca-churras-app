import { useCallback, useEffect, useState, useMemo } from 'react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

import { DefaultModal, MoneyInfo, ParticipantsInfo } from 'components';
import { PrimaryTitle, SecondaryTitle } from 'components/Title';
import { IBarbecue, useGlobalContext } from 'contexts/GlobalContext';
import useMobile from 'hooks/useMobile';
import { ParticipantForm, PersonInfo } from './components';
import { formatBRLStringToNumber } from 'utils/formatCurreny';

import { Modal as AntModal, Tooltip as AntTooltip, Form as AntForm } from 'antd';
import * as S from './styles';

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
        <S.PeopleContainer>
          {barbecue?.peopleList?.map(p => (
            <SecondaryTitle
              key={p.id}
              text={`${p.name} - R$ ${p.contributionValue}  ${p.alreadyPaid ? '(PAGO)' : ''}`}
            />
          ))}
        </S.PeopleContainer>
      </div>
    );
  }, [barbecue]);

  const info = () => {
    AntModal.info({
      icon: false,
      title: <PrimaryTitle text={`${barbecue?.title} `} />,
      content: listDetailsMemoized,
      okText: 'Fechar',
      onOk() {},
    });
  };

  return (
    <S.Card bodyStyle={{ height: '100%', padding: '18px' }}>
      <S.BackButton onClick={onClose}>Voltar</S.BackButton>
      {isMobile ? (
        <>
          <PrimaryTitle text={barbecue?.date || ''} />
          <S.BarbecueTitle>{barbecue?.title || ''}</S.BarbecueTitle>
          <S.DetailsMobileInfo>
            <ParticipantsInfo value={barbecue?.peopleList?.length} />
            <MoneyInfo value={totalAmount} />
          </S.DetailsMobileInfo>
        </>
      ) : (
        <>
          <S.WrapperHeader>
            <PrimaryTitle text={barbecue?.date || ''} />
            <ParticipantsInfo value={barbecue?.peopleList?.length || 0} />
          </S.WrapperHeader>
          <S.WrapperHeader>
            <S.BarbecueTitle>{barbecue?.title || ''}</S.BarbecueTitle>
            <MoneyInfo value={barbecue?.peopleList?.length === 0 ? 0 : totalAmount} />
          </S.WrapperHeader>
        </>
      )}

      <S.DescriptionText> {barbecue?.description}</S.DescriptionText>
      {barbecue?.observation && (
        <S.DescriptionText>
          <b>Obs:</b> {barbecue?.observation}
        </S.DescriptionText>
      )}
      {!!barbecue?.peopleList?.length ? (
        <S.PariticpantsWrapper>
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
        </S.PariticpantsWrapper>
      ) : (
        <S.ContainerEmptyData>
          <SecondaryTitle text="Nenhum participante foi registrado ainda =( " />
        </S.ContainerEmptyData>
      )}

      <S.ButtonContainer>
        <S.AddParticipanButton type="primary" onClick={() => setAddParticipantModalVisible(true)}>
          Adicionar Participante
        </S.AddParticipanButton>
        {!!barbecue?.peopleList?.length && (
          <AntTooltip title="Veja os detalhes do evento. Copie os dados (ctrl c + ctrl v) e cole no whatsapp para compartilhar =)">
            <S.AddParticipanButton style={{ maxWidth: '120px' }} type="primary" onClick={info}>
              Copiar lista
            </S.AddParticipanButton>
          </AntTooltip>
        )}
      </S.ButtonContainer>

      <DefaultModal
        open={addParticpantModalVisible}
        formName="participantForm"
        destroyOnClose
        onOk={doSendForm}
        onCancel={handleCloseModal}
      >
        <ParticipantForm onClose={handleCloseModal} form={form} />
      </DefaultModal>
    </S.Card>
  );
};

export { BarbecueDetails };

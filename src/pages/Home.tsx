import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Form as AntForm, Input, DatePicker } from 'antd';
import { useGlobalContext } from 'contexts/GlobalContext';
import Header from 'modules/Header';
import BarbecueCard from 'components/BarbecueCard';
import AddBarbecueCard from 'components/AddBarbecueCard';
import { TrincaLogo } from 'assets/icons';
import BarbecueDetails from 'components/BarbecueDetails';
import { DefaultModal } from 'components/Modal';
import { useNavigate } from 'react-router-dom';

import dayjs from 'dayjs';
import BarbecueForm from 'components/BarbecueForm';

const Home: React.FC = () => {
  const { barbecue, setBarbecue } = useGlobalContext();
  const [selectedBarbecue, setSelectedBarbecue] = useState<any>({});
  const [addBarbecueModalVisible, setAddBarbecueModalVisible] = useState(false);
  const [form] = AntForm.useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      navigate('/');
    }
  }, []);

  const doSendForm = async () => {
    let values: any = null;
    values = await form.validateFields();
    const randomId = String(Math.floor(Math.random() * 200));
    const formattedDate = dayjs(values.date).format('DD/MM/YY');
    setBarbecue([
      ...barbecue,
      {
        title: values.title,
        date: formattedDate,
        observation: values.observation,
        description: values.description,
        id: randomId,
        peopleList: [],
      },
    ]);
    onCloseModal();
    //TODO exibir toast de sucesso e colocar um try
  };
  const onCloseModal = () => {
    form.resetFields();
    setAddBarbecueModalVisible(false);
  };
  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
        {selectedBarbecue.id ? (
          <BarbecueDetails barbecue={selectedBarbecue} onClose={() => setSelectedBarbecue({})} />
        ) : (
          <CardsWrapper id="wrapper__cards">
            {barbecue?.map(b => (
              <BarbecueCard key={b.id} barbecue={b} selectBarbecue={setSelectedBarbecue} />
            ))}
            <AddBarbecueCard handleClick={() => setAddBarbecueModalVisible(true)} />
          </CardsWrapper>
        )}
      </ContentWrapper>
      <LogoWrapper>
        <img src={TrincaLogo} style={{ marginTop: '5rem' }} />
      </LogoWrapper>
      <DefaultModal
        open={addBarbecueModalVisible}
        formName="barbecueForm"
        destroyOnClose
        onOk={doSendForm}
        onCancel={onCloseModal}
      >
        <BarbecueForm onClose={onCloseModal} form={form} />
      </DefaultModal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.palette.background.main};
  padding-bottom: 12px;
`;
const ContentWrapper = styled.div`
  max-width: 588px;
  margin: 0 auto;
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: -40px;
  padding-bottom: 12px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    padding-bottom: 20px;
  }
`;

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default Home;

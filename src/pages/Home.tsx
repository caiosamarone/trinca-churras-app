import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { Form as AntForm } from 'antd';
import { useGlobalContext } from 'contexts/GlobalContext';
import Header from 'modules/Header';
import { TrincaLogo } from 'assets/icons';
import { DefaultModal } from 'components/Modal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddBarbecueCard, BarbecueCard, BarbecueDetails, BarbecueForm } from 'components';
import { v4 as uuidv4 } from 'uuid';

const Home: React.FC = () => {
  const { barbecue, setBarbecue } = useGlobalContext();
  const [selectedBarbecue, setSelectedBarbecue] = useState<any>({});
  const [addBarbecueModalVisible, setAddBarbecueModalVisible] = useState(false);
  const [form] = AntForm.useForm();
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/');
      return;
    }
    toast.success(`Seja bem-vindo, ${user?.split('@')[0]}!`, {
      position: 'bottom-left',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      progress: undefined,
      theme: 'light',
    });
  }, []);

  const doSendForm = async () => {
    let values: any = null;
    values = await form.validateFields();
    const randomId = uuidv4();
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
    toast.success(`Churrasco 🍖 ${values.title} agendado `, {
      position: 'bottom-left',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

    onCloseModal();
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

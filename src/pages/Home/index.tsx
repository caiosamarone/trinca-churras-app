import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';
import { Form as AntForm } from 'antd';
import { v4 as uuidv4 } from 'uuid';

import { useGlobalContext } from 'contexts/GlobalContext';
import { Header } from 'modules';
import { TrincaLogo } from 'assets/icons';
import { DefaultModal } from 'components/Modal';

import 'react-toastify/dist/ReactToastify.css';
import * as S from './styles';
import { AddBarbecueCard, BarbecueCard, BarbecueDetails, BarbecueForm } from './components';

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
    toast.success(`Seja bem-vindo(a), ${user?.split('@')[0]}!`, {
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
    <S.Wrapper>
      <Header />
      <S.ContentWrapper>
        {selectedBarbecue.id ? (
          <BarbecueDetails barbecue={selectedBarbecue} onClose={() => setSelectedBarbecue({})} />
        ) : (
          <S.CardsWrapper id="wrapper__cards">
            {barbecue?.map(b => (
              <BarbecueCard key={b.id} barbecue={b} selectBarbecue={setSelectedBarbecue} />
            ))}
            <AddBarbecueCard handleClick={() => setAddBarbecueModalVisible(true)} />
          </S.CardsWrapper>
        )}
      </S.ContentWrapper>
      <S.LogoWrapper>
        <img src={TrincaLogo} alt="Logo trinca" />
      </S.LogoWrapper>
      <DefaultModal
        open={addBarbecueModalVisible}
        formName="barbecueForm"
        destroyOnClose
        onOk={doSendForm}
        onCancel={onCloseModal}
      >
        <BarbecueForm onClose={onCloseModal} form={form} />
      </DefaultModal>
    </S.Wrapper>
  );
};

export { Home };

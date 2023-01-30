import { BBQPattern, TrincaLogo } from 'assets/icons';
import { Typography, Form as AntForm, Input as AntInput, Button as AntButton } from 'antd';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [form] = AntForm.useForm();

  const onSubmit = () => {
    localStorage.setItem('user', form.getFieldValue('email'));
    navigate('/agenda-de-churrascos');
  };
  return (
    <Wrapper>
      <ContentWrapper>
        <ImageContainer>
          <LogoIcon src={BBQPattern} />
        </ImageContainer>
        <Form>
          <Title>Agenda de Churras</Title>
          <FormWrapper>
            <AntForm
              form={form}
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 32 }}
              style={{ minWidth: 280 }}
              initialValues={{ remember: true }}
              onFinish={onSubmit}
              autoComplete="off"
            >
              <label className="label__email">
                Login
                <AntForm.Item
                  name="email"
                  rules={[{ required: true, message: 'E-mail inválido', type: 'email' }]}
                >
                  <Input placeholder="e-mail" style={{ width: '100%' }} />
                </AntForm.Item>
              </label>
              <label className="label__password">
                Senha
                <AntForm.Item
                  name="password"
                  rules={[{ required: true, message: 'Insira sua senha' }]}
                >
                  <Input.Password placeholder="senha" id="input__password" />
                </AntForm.Item>
              </label>
              <Button type="primary" htmlType="submit">
                Entrar
              </Button>
            </AntForm>
          </FormWrapper>
          <img src={TrincaLogo} style={{ marginTop: '5rem' }} />
        </Form>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main};
  height: 100vh;
  .label__password,
  .label__email {
    font-weight: bold;
  }
`;
const ContentWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: -280px;
  @media (max-width: 768px) {
    margin-top: -60px;
  }
`;

const Title = styled(Typography.Title)`
  font-size: 32px !important;
  font-weight: bold !important;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  margin-bottom: 1rem;
  gap: 12px;
`;

const Button = styled(AntButton)`
  width: 100%;
  background-color: black;
  border-radius: 18px;
  margin-top: 12px;
  &:hover {
    background-color: ${({ theme }) => theme.palette.text.primary} !important;
    border-color: ${({ theme }) => theme.palette.text.white} !important;
  }
`;

const Input = styled(AntInput)`
  &:hover {
    border-color: #6a6133 !important;
  }
  .ant-input-password {
    border-color: #6a6133 !important;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  background-image: linear-gradient(to bottom, transparent 60%, #ffd836 100%), url(bbq-pattern.svg);
`;
const LogoIcon = styled.img`
  width: 100%;
  opacity: 0;
`;

export default Login;

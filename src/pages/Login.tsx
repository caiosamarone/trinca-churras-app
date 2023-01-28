import { BBQPattern, TrincaLogo } from 'assets/icons';
import { Typography, Form as AntForm, Input as AntInput, Button as AntButton } from 'antd';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate('/agenda-de-churrascos');
  };
  return (
    <Wrapper>
      <ContentWrapper>
        <img src={BBQPattern} style={{ width: '100%' }} />
        <Form>
          <Title>Agenda de Churras</Title>
          <FormWrapper>
            <AntForm
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 32 }}
              style={{ minWidth: 280 }}
              initialValues={{ remember: true }}
              onFinish={onSubmit}
              // onFinishFailed={onSubmitFailed}
              autoComplete="off"
            >
              <label>
                Login
                <AntForm.Item
                  name="email"
                  rules={[{ required: true, message: 'E-mail inválido', type: 'email' }]}
                >
                  <Input placeholder="e-mail" style={{ width: '100%' }} />
                </AntForm.Item>
              </label>
              <label>
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
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
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
export default Login;

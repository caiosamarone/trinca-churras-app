import { BBQPattern, TrincaLogo } from 'assets/icons';
import { Form as AntForm, Input as AntInput, Button as AntButton } from 'antd';
import { useNavigate } from 'react-router-dom';

import * as S from './styles';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [form] = AntForm.useForm();

  const onSubmit = () => {
    localStorage.setItem('user', form.getFieldValue('email'));
    navigate('/agenda-de-churrascos');
  };
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.ImageContainer>
          <S.BackgroundIcon src={BBQPattern} />
        </S.ImageContainer>
        <S.Form>
          <S.Title>Agenda de Churras</S.Title>
          <S.FormWrapper>
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
                  <S.Input placeholder="e-mail" style={{ width: '100%' }} />
                </AntForm.Item>
              </label>
              <label className="label__password">
                Senha
                <AntForm.Item
                  name="password"
                  rules={[{ required: true, message: 'Insira sua senha' }]}
                >
                  <S.Input.Password placeholder="senha" id="input__password" />
                </AntForm.Item>
              </label>
              <S.Button type="primary" htmlType="submit">
                Entrar
              </S.Button>
            </AntForm>
          </S.FormWrapper>
          <S.TrincaIcon src={TrincaLogo} />
        </S.Form>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export { Login };

import styled from 'styled-components';
import { Form as AntForm, Input, DatePicker } from 'antd';
import PrimaryTitle from './PrimaryTitle';
import dayjs from 'dayjs';

import { FormInstance } from 'antd/lib/form/Form';

interface Props {
  onClose: () => void;
  form: FormInstance;
}

const BarbecueForm: React.FC<Props> = ({ form }) => {
  return (
    <>
      <PrimaryTitle text="Agendar churrasco" />
      <Form
        name="barbecueForm"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 32 }}
        form={form}
        autoComplete="off"
      >
        <AntForm.Item name="title" rules={[{ required: true, message: 'Insira um título' }]}>
          <Input placeholder="Título" maxLength={40} />
        </AntForm.Item>
        <AntForm.Item name="date" rules={[{ required: true, message: 'Insira uma data' }]}>
          <DatePicker
            disabledDate={date => date && date < dayjs().endOf('d').subtract(1, 'd')}
            placeholder="Data do churrasco"
            style={{ width: '100%' }}
            format="DD/MM/YYYY"
          />
        </AntForm.Item>
        <AntForm.Item
          name="description"
          rules={[{ required: true, message: 'Insira uma descrição para o evento' }]}
        >
          <Input placeholder="Descrição" maxLength={100} />
        </AntForm.Item>

        <AntForm.Item name="observation">
          <Input placeholder="Observações adicionais" maxLength={100} />
        </AntForm.Item>
      </Form>
    </>
  );
};

const Form = styled(AntForm)`
  min-width: 280px;
  margin-top: 24px;
  @media (max-width: 768px) {
    min-width: unset;
  }
`;

export default BarbecueForm;

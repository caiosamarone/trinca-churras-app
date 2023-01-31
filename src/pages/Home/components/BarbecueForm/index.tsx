import dayjs from 'dayjs';

import { FormInstance } from 'antd/lib/form/Form';

import { Form as AntForm, Input, DatePicker } from 'antd';
import * as S from './styles';
import { PrimaryTitle } from 'components/Title';

interface Props {
  onClose: () => void;
  form: FormInstance;
}

const BarbecueForm: React.FC<Props> = ({ form }) => {
  return (
    <>
      <PrimaryTitle text="Agendar churrasco" />
      <S.Form
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
      </S.Form>
    </>
  );
};

export { BarbecueForm };

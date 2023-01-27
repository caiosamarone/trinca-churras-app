import styled from 'styled-components';
import { Form as AntForm, Input, InputNumber, Radio, RadioChangeEvent, Typography } from 'antd';
import PrimaryTitle from './PrimaryTitle';

import { FormInstance } from 'antd/lib/form/Form';
import { useState } from 'react';
import { NumericFormat } from 'react-number-format';

interface Props {
  onClose: () => void;
  form: FormInstance;
}

const ParticipantForm: React.FC<Props> = ({ form }) => {
  const [drinkValue, setDrinkValue] = useState(1);

  const inputNode = (
    <NumericFormat
      customInput={Input}
      thousandSeparator="."
      decimalSeparator=","
      decimalScale={2}
      prefix="R$ "
      placeholder="Valor de contribuição"
    />
  );

  const onChange = (e: RadioChangeEvent) => {
    setDrinkValue(e.target.value);
  };

  const handleSuggestedValue = () => {
    if (drinkValue === 1) {
      return `R$ 20,00`;
    } else {
      return `35,00`;
    }
  };

  return (
    <>
      <PrimaryTitle text="Adicionar participante" />
      <Form
        name="participantForm"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 32 }}
        form={form}
        autoComplete="off"
      >
        <AntForm.Item name="name" rules={[{ required: true, message: 'Insira um nome' }]}>
          <Input placeholder="Nome" />
        </AntForm.Item>
        <Radio.Group onChange={onChange} value={drinkValue}>
          <Radio value={1}>Vou levar bebida</Radio>
          <Radio value={2}>Sem bebida</Radio>
        </Radio.Group>
        <Typography.Paragraph style={{ fontSize: '16px', marginTop: '12px', marginBottom: '0px' }}>
          Valor sugerido de contribuição: {handleSuggestedValue()}
        </Typography.Paragraph>
        <AntForm.Item
          name="contributionValue"
          rules={[{ required: true, message: 'Insira um contribuição para o churras' }]}
        >
          {inputNode}
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

export default ParticipantForm;

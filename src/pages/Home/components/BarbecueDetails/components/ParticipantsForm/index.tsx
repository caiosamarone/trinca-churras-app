import { useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { FormInstance } from 'antd/lib/form/Form';
import { PrimaryTitle } from 'components/Title';

import {
  Form as AntForm,
  Input as AntInput,
  Radio as AntRadio,
  RadioChangeEvent as AntRadioChangeEvent,
} from 'antd';
import * as S from './styles';

interface Props {
  onClose: () => void;
  form: FormInstance;
}

const ParticipantForm: React.FC<Props> = ({ form }) => {
  const [drinkValue, setDrinkValue] = useState(1);

  const inputNode = (
    <NumericFormat
      customInput={AntInput}
      thousandSeparator="."
      decimalSeparator=","
      decimalScale={2}
      prefix="R$ "
      placeholder="Valor de contribuição"
    />
  );

  const onChange = (e: AntRadioChangeEvent) => {
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
      <S.Form
        name="participantForm"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 32 }}
        form={form}
        autoComplete="off"
      >
        <AntForm.Item name="name" rules={[{ required: true, message: 'Insira um nome' }]}>
          <AntInput placeholder="Nome" maxLength={30} />
        </AntForm.Item>
        <AntRadio.Group onChange={onChange} value={drinkValue}>
          <AntRadio value={1}>Vou levar bebida</AntRadio>
          <AntRadio value={2}>Sem bebida</AntRadio>
        </AntRadio.Group>
        <S.ContributionValue>
          Valor sugerido de contribuição: {handleSuggestedValue()}
        </S.ContributionValue>
        <AntForm.Item
          name="contributionValue"
          rules={[
            { required: true, message: 'Insira um contribuição para o churras' },
            { max: 8, message: 'Muito dinheiro! É apenas uma contribuição =)' },
          ]}
        >
          {inputNode}
        </AntForm.Item>
      </S.Form>
    </>
  );
};

export { ParticipantForm };

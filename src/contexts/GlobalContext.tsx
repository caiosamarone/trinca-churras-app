import { ConfigProvider } from 'antd';
import React, { useState, useContext, useEffect } from 'react';
import ptBR from 'antd/lib/locale/pt_BR';
import { createContext } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

dayjs.locale('pt-br');
export interface IParticipant {
  id: string;
  name: string;
  contributionValue: string;
  alreadyPaid: boolean;
}

export interface IBarbecue {
  id: string;
  title: string;
  date: string;
  totalAmount: string;
  description: string;
  observation?: string;
  peopleList?: IParticipant[];
}

interface IGlobalProps {
  barbecue: IBarbecue[];
  setBarbecue: (values: IBarbecue[]) => void;
}
interface Props {
  children: React.ReactElement;
}

const GlobalContext = createContext<IGlobalProps>({} as IGlobalProps);

export const GlobalProvider: React.FC<Props> = ({ children }) => {
  const [barbecue, setBarbecue] = useState<IBarbecue[]>([]);

  useEffect(() => {
    setBarbecue([
      {
        id: '1',
        date: '12/02',
        totalAmount: '023',
        description: 'Churras da galera',
        title: 'Churras 2',
        peopleList: [
          {
            id: '1',
            name: 'caio',
            contributionValue: '40',
            alreadyPaid: true,
          },
          {
            id: '2',
            name: 'pedro',
            contributionValue: '20',
            alreadyPaid: false,
          },
          {
            id: '3',
            name: 'Liandra',
            contributionValue: '10',
            alreadyPaid: false,
          },
        ],
      },
      {
        id: '2',
        date: '12/02',
        totalAmount: '023',
        description: 'Churras da galera',
        title: 'Churras caio',
        peopleList: [],
      },
      {
        id: '3',
        date: '12/02',
        totalAmount: '023',
        description: 'Churras da galera',
        title: 'Churras sem compromisso',
        peopleList: [],
      },
    ]);
  }, []);

  //todo => funcao de deletar participante
  //todo => funcao que atualiza lista de participantes de um churrasco, e atualiza o total amount
  //todo => funcao que checa se o usuario ja pagou um churrasco
  const handleAddParticipant = (data: IParticipant) => {};

  const handleCreateBarbecue = (data: IBarbecue) => {};

  const handleDeleteParticipant = (participant: IParticipant) => {};

  const checkParticipantPaid = (participan: IParticipant) => {};

  const context = {
    barbecue,
    setBarbecue,
  };

  return (
    <ConfigProvider locale={ptBR}>
      <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
    </ConfigProvider>
  );
};

export const useGlobalContext = (): IGlobalProps => {
  const context = useContext(GlobalContext);
  return context;
};

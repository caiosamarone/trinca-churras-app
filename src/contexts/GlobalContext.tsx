import React, { useState, useContext, useEffect } from 'react';
import { createContext } from 'react';

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

  const context = {
    barbecue,
    setBarbecue,
  };

  return <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = (): IGlobalProps => {
  const context = useContext(GlobalContext);
  return context;
};

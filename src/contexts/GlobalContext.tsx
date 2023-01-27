import { ConfigProvider } from 'antd';
import React, { useState, useContext, useEffect } from 'react';
import ptBR from 'antd/lib/locale/pt_BR';
import { createContext } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import initialBarbecueState from 'mocks/initialBarbecueState';

dayjs.locale('pt-br');
export interface IParticipant {
  id: string;
  name: string;
  contributionValue: number;
  alreadyPaid: boolean;
}

export interface IBarbecue {
  id: string;
  title: string;
  date: string;
  description: string;
  observation?: string;
  peopleList?: IParticipant[];
}

interface IGlobalProps {
  barbecue: IBarbecue[];
  setBarbecue: (values: IBarbecue[]) => void;
  handleAddParticipant: (participant: IParticipant, id: string) => void;
  handleDeleteParticipant: (barbecueId: string, participantId: string) => void;
  checkParticipantPaid: (barbecueId: string, participantId: string) => void;
}
interface Props {
  children: React.ReactElement;
}

const GlobalContext = createContext<IGlobalProps>({} as IGlobalProps);

export const GlobalProvider: React.FC<Props> = ({ children }) => {
  const [barbecue, setBarbecue] = useState<IBarbecue[]>([]);

  useEffect(() => {
    setBarbecue(initialBarbecueState);
    // if (!localStorage.getItem('barbecue')?.length) {
    //   localStorage.setItem('barbecue', JSON.stringify(initialBarbecueState));
    // }
  }, []);

  const handleAddParticipant = (data: IParticipant, barbecueId: string) => {
    setBarbecue(
      barbecue?.map((b: IBarbecue) => {
        if (b.id === barbecueId) {
          const actualList = b.peopleList?.concat(data);
          return { ...b, peopleList: actualList };
        } else {
          return b;
        }
      }),
    );
  };

  const handleDeleteParticipant = (barbecueId: string, participantId: string) => {
    setBarbecue(
      barbecue?.map((b: IBarbecue) => {
        if (b.id === barbecueId) {
          const refreshedList = b.peopleList?.filter(p => p.id !== participantId);
          return { ...b, peopleList: refreshedList };
        } else {
          return b;
        }
      }),
    );
  };

  const checkParticipantPaid = (barbecueId: string, participantId: string) => {
    setBarbecue(
      barbecue.map((b: IBarbecue) => {
        if (b.id === barbecueId) {
          const newObject = b.peopleList?.map((p: IParticipant) => {
            if (p.id === participantId) {
              return { ...p, alreadyPaid: true };
            } else {
              return p;
            }
          });

          return { ...b, peopleList: newObject };
        } else {
          return b;
        }
      }),
    );
  };

  const context = {
    barbecue,
    setBarbecue,
    handleAddParticipant,
    handleDeleteParticipant,
    checkParticipantPaid,
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

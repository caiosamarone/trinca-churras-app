import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Button as AntButton } from 'antd';
import { useGlobalContext } from 'contexts/GlobalContext';
import Header from 'modules/Header';
import BarbecueCard from 'components/BarbecueCard';

const Home: React.FC = () => {
  const [count, setCount] = useState(30);
  const { barbecue } = useGlobalContext();
  console.log(barbecue);
  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
        {/* TODO -  criar um container para cada os cards */}
        {barbecue.map(b => (
          <BarbecueCard
            key={b.id}
            id={b.id}
            title={b.title}
            description={b.description}
            totalAmount={b.totalAmount}
            observation={b.observation}
            peopleList={b.peopleList}
            date={b.date}
          />
        ))}
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.background.main};
`;
const ContentWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export default Home;

import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Button as AntButton } from 'antd';
import { IBarbecue, useGlobalContext } from 'contexts/GlobalContext';
import Header from 'modules/Header';
import BarbecueCard from 'components/BarbecueCard';
import AddBarbecueCard from 'components/AddBarbecueCard';
import { TrincaLogo } from 'assets/icons';
import BarbecueDetails from 'modules/BarbecueDetails';

const Home: React.FC = () => {
  const { barbecue } = useGlobalContext();
  const [selectedBarbecue, setSelectedBarbecue] = useState<any>({});
  console.log(selectedBarbecue);
  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
        {selectedBarbecue.id ? (
          <BarbecueDetails barbecue={selectedBarbecue} onClose={() => setSelectedBarbecue({})} />
        ) : (
          <CardsWrapper id="wrapper__cards">
            {barbecue.map(b => (
              <BarbecueCard key={b.id} barbecue={b} selectBarbecue={setSelectedBarbecue} />
            ))}
            <AddBarbecueCard />
          </CardsWrapper>
        )}
        {/* TODO -  criar um container para cada os cards */}
      </ContentWrapper>
      <LogoWrapper>
        <img src={TrincaLogo} style={{ marginTop: '5rem' }} />
      </LogoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.palette.background.main};
  padding-bottom: 12px;
`;
const ContentWrapper = styled.div`
  max-width: 588px;
  margin: 0 auto;
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: -40px;
  padding-bottom: 12px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    padding-bottom: 20px;
  }
`;

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default Home;

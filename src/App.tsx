import React, {useReducer} from 'react';
import "./assets/scss/common.scss";
import { Layout } from 'antd';
import { Timer } from './components/Timer/Timer';
import ButtonAddCard from './components/ButtonAddCard/ButtonAddCard';
import { cardReducer } from './localState/cardReducer';
import { CardContext } from './localState/cardContext';
import { CardsContainer } from './components/CardsContainer/CardsContainer';

const { Content, Header } = Layout;

const App: React.FC = () => {
  const [cardState, dispatchCard] = useReducer(cardReducer, [
    {
      id: '1',
      city: 'Москва',
      population: '1212'
    }
  ]);

  return (
      <Layout>
        <Header>
          <Timer />
        </Header>
        <Content>
          <CardContext.Provider value={{ cardState, dispatchCard }}>
            <ButtonAddCard />
            <CardsContainer />
          </CardContext.Provider>
        </Content>
      </Layout>
  );
}

export default App;

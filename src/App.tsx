import React, {useReducer} from 'react';
import "./assets/scss/common.scss";
import { Layout } from 'antd';
import { Timer } from './components/Timer/Timer';
import ButtonAddCard from './components/ButtonAddCard/ButtonAddCard';
import { cardReducer } from './localState/cardReducer';
import { CardContext } from './localState/cardContext';
import { CardsContainer } from './components/CardsContainer/CardsContainer';
import { useEffect } from 'react';

const { Content, Header } = Layout;

const App: React.FC = () => {
  //@ts-ignore
  const [cardState, dispatchCard] = useReducer(cardReducer, JSON.parse(localStorage.getItem("localState")) || []);

  useEffect(() => {
    localStorage.setItem("localState", JSON.stringify(cardState));
  }, [cardState])

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

import React, {useReducer} from 'react';
import "./assets/scss/common.scss";
import { Layout } from 'antd';
import { Timer } from './components/Timer/Timer';
import ButtonAddCard from './components/ButtonAddCard/ButtonAddCard';
import { cardReducer, CardType } from './localState/cardReducer';
import { CardsContainer } from './components/CardsContainer/CardsContainer';
import { useEffect } from 'react';

const { Content, Header } = Layout;
const localStorageData = localStorage.getItem("localState");
const localStorageParsedData:CardType[] = localStorageData ? JSON.parse(localStorageData) : [];

const App: React.FC = () => {
  const [cardsState, dispatchCard] = useReducer(cardReducer, localStorageParsedData);

  useEffect(() => {
    localStorage.setItem("localState", JSON.stringify(cardsState));
  }, [cardsState])

  return (
      <Layout>
        <Header>
          <Timer />
        </Header>
        <Content>
          <ButtonAddCard dispatchCard={dispatchCard} />
          <CardsContainer cardsState={cardsState} dispatchCard={dispatchCard} />
        </Content>
      </Layout>
  );
}

export default App;

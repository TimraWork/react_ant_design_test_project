import React, {useReducer} from 'react';
import "./assets/scss/common.scss";
import { Layout } from 'antd';
import { Timer } from './components/Timer/Timer';
import ButtonAddCard from './components/ButtonAddCard/ButtonAddCard';
import { cardReducer } from './localState/cardReducer';
import { CardContext, CardType } from './localState/cardContext';
import { CardsContainer } from './components/CardsContainer/CardsContainer';
import { useEffect } from 'react';

const { Content, Header } = Layout;
const localStorageData = localStorage.getItem("localState");
const localStorageParsedData:CardType[] = localStorageData ? JSON.parse(localStorageData) : [];

const App: React.FC = () => {
  const [cardState, dispatchCard] = useReducer(cardReducer, localStorageParsedData);

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

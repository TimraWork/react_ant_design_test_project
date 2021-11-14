import "./assets/scss/common.scss";
import { Layout } from 'antd';
import { Timer } from './components/Timer/Timer';
import ButtonAddCard from './components/ButtonAddCard/ButtonAddCard';

const { Content, Header } = Layout;

function App() {
  return (
      <Layout>
        <Header>
          <Timer />
        </Header>
        <Content>
          <ButtonAddCard />
        </Content>
      </Layout>
  );
}

export default App;

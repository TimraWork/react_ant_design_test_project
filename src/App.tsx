import React, {useState} from 'react';
import "./assets/scss/common.scss";
import { Layout, Col, Row } from 'antd';
import { Timer } from './components/Timer/Timer';
import ButtonAddCard from './components/ButtonAddCard/ButtonAddCard';
import { CardItem } from "./components/CardItem/CardItem";
import { ModalDeleteCard } from "./components/ModalDeleteCard/ModalDeleteCard";

const { Content, Header } = Layout;

const App: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const handleCancel = () =>  setIsModalVisible(false);

  const onCardDelete = () => {
    showModal();
  }

  return (
      <Layout>
        <Header>
          <Timer />
        </Header>
        <Content>
          <ButtonAddCard />
          <Row gutter={16}>
            <Col span={8}><CardItem onCardDelete={onCardDelete} /></Col>
            <Col span={8}><CardItem onCardDelete={onCardDelete} /></Col>
            <Col span={8}><CardItem onCardDelete={onCardDelete} /></Col>
          </Row>
          <ModalDeleteCard isModalVisible={isModalVisible} handleOk = {handleCancel} handleCancel = {handleCancel} />
        </Content>
      </Layout>
  );
}

export default App;

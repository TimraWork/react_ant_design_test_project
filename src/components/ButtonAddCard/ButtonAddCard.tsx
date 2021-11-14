import React, {useState} from 'react';
import { Button } from 'antd';
import { ModalAddCard } from '../ModalAddCard/ModalAddCard';

const ButtonAddCard: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => setIsModalVisible(true);
    const handleCancel = () =>  setIsModalVisible(false);

    const handleOk = (city:string, population: string) => {
        console.log(city, population);
        setIsModalVisible(false);
    }

    return (
        <div className="ButtonAddCard">
            <Button onClick={showModal} className="animationPulse" type="primary">Создать карточку</Button> 
            <ModalAddCard isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} />
        </div>
    );
}

export default React.memo(ButtonAddCard);
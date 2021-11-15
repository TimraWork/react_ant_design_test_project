import React, {useState, useContext} from 'react';
import { Button } from 'antd';
import { ModalAddCard } from '../ModalAddCard/ModalAddCard';
import './ButtonAddCard.scss'
import { CardContext } from '../../localState/cardContext';


const ButtonAddCard: React.FC = () => {
    //@ts-ignore
    const { dispatchCard } = useContext(CardContext);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => setIsModalVisible(true);
    const handleCancel = () =>  setIsModalVisible(false);

    const handleOk = (city:string, population: string) => {
        console.log(city, population);
        dispatchCard({
            type: 'add',
            payload: {
                city,
                population
            }
        })
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
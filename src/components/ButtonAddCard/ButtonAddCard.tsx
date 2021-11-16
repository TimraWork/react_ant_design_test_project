import React, {useState, useContext} from 'react';
import { Button } from 'antd';
import { ModalAddCard } from '../ModalAddCard/ModalAddCard';
import './ButtonAddCard.scss'
import { CardContext } from '../../localState/cardContext';
import { generateHex } from '../../utils/generateHex';
import { invertHex } from '../../utils/invertHex';

const ButtonAddCard: React.FC = () => {
    const { dispatchCard } = useContext(CardContext);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => setIsModalVisible(true);
    const handleCancel = () => setIsModalVisible(false);

    const handleOk = (city:string, population: string) => {
        const hex = generateHex();
        dispatchCard({
            type: 'add',
            payload: {
                city,
                population,
                backgroundColor: "#" + hex,
                textColor: "#" + invertHex(hex)
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
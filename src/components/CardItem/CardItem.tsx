import React, {useState, useContext} from 'react';
import { Card, Button, Tooltip } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { ModalDeleteCard } from '../ModalDeleteCard/ModalDeleteCard';
import { CardContext } from '../../localState/cardContext';

export type ICardItemProps = {
    el: any
}

const CardItem: React.FC<ICardItemProps> = ({ el }) => {
    //@ts-ignore
    const { dispatchCard } = useContext(CardContext); 
    const [isModalVisible, setIsModalVisible] = useState(false);

    const onCardDelete = () => setIsModalVisible(true);
    const handleCancel = () => setIsModalVisible(false);
    
    const onDeleteCard = () => {
        dispatchCard({
            type: 'delete',
            payload: {
                id: el.id
            }
        })
        setIsModalVisible(false);
    }

    return (
        <>
            <Card title={el.city} extra={<Tooltip title="Удалить"> <Button onClick={onCardDelete} shape="circle" type="primary" danger icon={<DeleteOutlined />} /> </Tooltip>} >
                <p>Численность: {el.population}</p>
            </Card>
            <ModalDeleteCard isModalVisible={isModalVisible} handleOk = {onDeleteCard} handleCancel = {handleCancel} />
        </>
    );
}

export { CardItem };
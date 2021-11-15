import React, {useState} from 'react';
import { Card, Button, Tooltip } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { ModalDeleteCard } from '../ModalDeleteCard/ModalDeleteCard';

export type ICardItemProps = {
    el: any
}

const CardItem: React.FC<ICardItemProps> = ({ el }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const onCardDelete = () => setIsModalVisible(true);

    const handleCancel = () => setIsModalVisible(false);
    const onDeleteCard = () => setIsModalVisible(false);

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
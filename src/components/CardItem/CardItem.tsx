import React from 'react';
import { Card, Button, Tooltip } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

export type ICardItemProps = {
    onCardDelete: () => void
}

const CardItem: React.FC<ICardItemProps> = ({ onCardDelete }) => {
    return (
        <Card title="Москва" extra={<Tooltip title="Удалить"> <Button onClick={onCardDelete} shape="circle" type="primary" danger icon={<DeleteOutlined />} /> </Tooltip>} >
            <p>Численность: 2314234543</p>
        </Card>
    );
}

export { CardItem };
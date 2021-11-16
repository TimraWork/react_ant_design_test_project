import { Input, Modal, Space } from 'antd';
import React from 'react';
import useInput from '../../customHooks/useInput';

export type IModalAddCardProps = {
    isModalVisible: boolean,
    handleOk: (city: string, population: string) => void,
    handleCancel: () => void
}

const ModalAddCard: React.FC<IModalAddCardProps> = ({ isModalVisible, handleOk, handleCancel }) => {
    const city = useInput("");
    const population = useInput("");

    const onModalClose = () => {
       city.reset();
       population.reset();
    }

    return (
        <Modal afterClose={onModalClose} title="Создать карточку" visible={isModalVisible} onOk={() => handleOk(city.value, population.value)} onCancel={handleCancel} cancelText="Отмена" okText="Создать">
            <Space direction="vertical" style={{ width: '100%' }}>
                <Input autoFocus={true} placeholder="Введите название города" value={city.value} onChange={city.onChange} />
                <Input type="number" placeholder="Введите численность населения" value={population.value} onChange={population.onChange} />
            </Space>
        </Modal>
    );
}

export { ModalAddCard };
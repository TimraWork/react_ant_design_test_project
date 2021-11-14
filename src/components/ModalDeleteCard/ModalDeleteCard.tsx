import { Modal } from 'antd';
import React from 'react';

export type IModalDeleteCardProps = {
    isModalVisible: boolean,
    handleOk: () => void,
    handleCancel: () => void
}

const ModalDeleteCard: React.FC<IModalDeleteCardProps> = ({ handleOk, handleCancel, isModalVisible }) => {
    return (
        <Modal destroyOnClose={true} title="Удалить карточку" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} cancelText="Отмена" okText="Удалить">
        Вы действительно хотите удалить карточку?
    </Modal>
    );
}

export { ModalDeleteCard };
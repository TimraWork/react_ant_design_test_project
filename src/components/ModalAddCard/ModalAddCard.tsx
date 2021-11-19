import { Input, Modal, Space, Button } from 'antd';
import React, {useEffect, useState} from 'react';
import useInput from '../../customHooks/useInput';

export type IModalAddCardProps = {
    isModalVisible: boolean,
    handleOk: (city: string, population: string) => void,
    handleCancel: () => void
}

const ModalAddCard: React.FC<IModalAddCardProps> = ({ isModalVisible, handleOk, handleCancel }) => {
    const city = useInput("");
    const population = useInput("");

    const [isCreateButtonDisable, setIsCreateButtonDisable] = useState(true);

    useEffect(() => {
        if(city.error || population.error) {
            setIsCreateButtonDisable(true);
        }
        else if(!(city.error && population.error)) {
            setIsCreateButtonDisable(false);
        }
    }, [city, population]);

    const onModalClose = () => {
       city.reset();
       population.reset();
    }

    return (
        <Modal
            afterClose={onModalClose}
            title="Создать карточку"
            visible={isModalVisible}
            destroyOnClose={true}
            onCancel={handleCancel}
            footer={[
                <Button key="reset" type="default" onClick={handleCancel} > Отмена </Button>,
                <Button key="submit" type="primary" onClick={() => handleOk(city.value, population.value)} disabled={isCreateButtonDisable}> Создать </Button>,
            ]}
        >
            <Space direction="vertical" style={{ width: '100%' }}>
                <Input autoFocus={true} placeholder="Введите название города" value={city.value} onChange={city.onChange} onBlur={city.onBlur} />
                {city.error && <div className="error">{city.error}</div>}
                <Input type="number" placeholder="Введите численность населения" value={population.value} onChange={population.onChange} onBlur={population.onBlur} />
                {population.error && <div className="error">{population.error}</div>}
            </Space>
        </Modal>
    );
}

export { ModalAddCard };
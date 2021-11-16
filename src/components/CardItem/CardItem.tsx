import React, {useState, useContext} from 'react';
import { Card, Button, Tooltip } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { ModalDeleteCard } from '../ModalDeleteCard/ModalDeleteCard';
import { CardContext, CardType } from '../../localState/cardContext';
import './CardItem.scss';

export type ICardItemProps = {
    el: CardType
}

const CardItem: React.FC<ICardItemProps> = ({ el }) => {
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
        <Card
          className="CardItem"
          style={{background: el.backgroundColor, color: el.textColor, border: 'none', borderRadius: '5px'}}
          title={<span style={{color: el.textColor}}>{el.city}</span>}
          extra={
            <Tooltip title="Удалить">
              <Button onClick={onCardDelete} shape="circle" type="primary" style={{backgroundColor: el.textColor, borderColor: el.textColor}} icon={<DeleteOutlined />} />
            </Tooltip>
          }
        >
          <p>Численность: {el.population}</p>
        </Card>
        <ModalDeleteCard isModalVisible={isModalVisible} handleOk={onDeleteCard} handleCancel={handleCancel} />
      </>
    );
}

export { CardItem };
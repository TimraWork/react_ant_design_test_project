import React, {useContext, useState} from 'react';
import { CardContext } from '../../localState/cardContext';
import { CardItem } from '../CardItem/CardItem';
import { Col, Row } from 'antd';

const CardsContainer: React.FC = () => {
    //@ts-ignore
    const { cardState } = useContext(CardContext);
   
    return (
        <Row gutter={16}>
             {
                cardState.map((el:any)=>(
                    <Col span={8} key={el.key}><CardItem el={el} /></Col> 
                ))
            }
        </Row>
    );
}

export { CardsContainer };
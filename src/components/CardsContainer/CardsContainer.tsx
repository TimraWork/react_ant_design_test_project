import React, { useContext } from 'react';
import { CardContext } from '../../localState/cardContext';
import { CardItem } from '../CardItem/CardItem';
import { Col, Row } from 'antd';
import { FilterCards } from '../FilterCards/FilterCards';

const CardsContainer: React.FC = () => {
    //@ts-ignore
    const { cardState } = useContext(CardContext);
    
    return (
        <>
            { cardState.length > 2 ? <FilterCards /> : null}
            
            <Row gutter={16}>
                { cardState.map((el:any)=>(
                    <Col span={8} key={el.id}><CardItem el={el} key={el.key} /></Col> 
                ))} 
            </Row>
        </>
    );
}

export { CardsContainer };
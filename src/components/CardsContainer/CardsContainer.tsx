import React, { useContext, useState, useEffect } from 'react';
import { CardContext } from '../../localState/cardContext';
import { CardItem } from '../CardItem/CardItem';
import { Alert, Col, Row } from 'antd';
import { FilterCards } from '../FilterCards/FilterCards';

const CardsContainer: React.FC = () => {
    // @ts-ignore
    const { cardState } = useContext(CardContext);

    const [cards, setCards] = useState(cardState);
    const [searchValue, setSearchValue] = useState("");

    const onSearch = (value: string) => {
        setSearchValue(value);
    }
    
    useEffect(() => {
        if(searchValue) {
            // @ts-ignore
            const newCards = cardState.filter(({city, population} ) => (city.includes(searchValue) || population.includes(searchValue)));
            setCards( newCards );
        } else {
            setCards( cardState );
        }
    }, [cardState, searchValue]);

    return (
        <>
            { cardState.length > 2 ? <FilterCards onSearch={onSearch} /> : null}

            <Row gutter={1} justify="center">
                { cards.map((el:any)=>(
                    <Col span={8} key={el.id}><CardItem el={el} key={el.key} /></Col>
                ))}
                {!cards.length && <Alert message="Нет записей, соответствующих строке поиска" type="info" showIcon />}
            </Row>
        </>
    );
}

export { CardsContainer };
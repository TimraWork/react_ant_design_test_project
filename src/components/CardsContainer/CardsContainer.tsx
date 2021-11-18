import React, { useContext, useState, useEffect } from 'react';
import { CardContext } from '../../localState/cardContext';
import { CardItem } from '../CardItem/CardItem';
import { Alert, Col, Row } from 'antd';
import { FilterCards } from '../FilterCards/FilterCards';

const CardsContainer: React.FC = () => {
    const { cardState } = useContext(CardContext);

    const [cards, setCards] = useState(cardState);
    const [searchValue, setSearchValue] = useState("");

    const onSearch = (value: string) => {
        setSearchValue(value);
    }

    useEffect(() => {
        if(searchValue) {
            const newCards = cardState.filter(({city, population} ) => (city.includes(searchValue) || population.includes(searchValue)));
            setCards( newCards );
        } else {
            setCards( cardState );
        }
    }, [cardState, searchValue]);

    return (
        <>
            { cardState.length > 1 ? <FilterCards onSearch={onSearch} /> : null}

            <Row gutter={[10, 10]} justify="center" >
                { cards.map((el)=>(
                    <Col key={el.id} xs={24} sm={12} md={8} lg={6} xl={4}><CardItem el={el} /></Col>
                ))}
                {!cardState.length ? <Alert message="Добавьте карточку ↑" type="info" showIcon /> : null}
                {!cards.length && cardState.length ? <Alert message="Нет карточек, соответствующих строке поиска" type="info" showIcon /> : null}
            </Row>
        </>
    );
}

export { CardsContainer };
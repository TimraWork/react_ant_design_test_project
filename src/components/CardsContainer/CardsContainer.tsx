import React, { useState, useEffect } from 'react';
import { CardItem } from '../CardItem/CardItem';
import { Alert, Col, Row } from 'antd';
import { FilterCards } from '../FilterCards/FilterCards';
import { ActionTypes } from '../../@types/types';
import { CardType } from '../../localState/cardReducer';

export type ICardsContainerProps = {
    cardsState: CardType[],
    dispatchCard: React.Dispatch<ActionTypes>
}

const CardsContainer: React.FC<ICardsContainerProps> = ({cardsState, dispatchCard}) => {
    const [cards, setCards] = useState(cardsState);
    const [searchValue, setSearchValue] = useState("");

    const onSearch = (value: string) => {
        setSearchValue(value);
    }

    useEffect(() => {
        if(searchValue) {
            const newCards = cardsState.filter(({city, population} ) => (city.includes(searchValue) || population.includes(searchValue)));
            setCards( newCards );
        } else {
            setCards( cardsState );
        }
    }, [cardsState, searchValue]);

    return (
        <>
            { cardsState.length > 1 ? <FilterCards onSearch={onSearch} /> : null}
            <Row gutter={[10, 10]} justify="center" >
                { cards.map((el)=>(
                    <Col key={el.id} xs={24} sm={12} md={8} lg={6} xl={4}><CardItem el={el} dispatchCard={dispatchCard} /></Col>
                ))}
                {!cardsState.length ? <Alert message="Добавьте карточку ↑" type="info" showIcon /> : null}
                {!cards.length && cardsState.length ? <Alert message="Нет карточек, соответствующих строке поиска" type="info" showIcon /> : null}
            </Row>
        </>
    );
}

export { CardsContainer };
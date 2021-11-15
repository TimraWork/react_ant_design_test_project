import React, {useContext} from 'react';
import { Input, Space } from 'antd';
import { CardContext } from '../../localState/cardContext';
import './FilterCards.scss';

const { Search } = Input;

const FilterCards: React.FC = () => {
    //@ts-ignore
    const { dispatchCard } = useContext(CardContext); 

    const onSearch = (value:string) => {
        console.log('value=', value);

        dispatchCard({
            type: 'filter',
            payload: {
                searchValue: value
            }
        })
    }

    return (
        <div className="FilterCards">
            <Space direction="horizontal" size="large" >
                <Search placeholder="Поиск" onSearch={onSearch} style={{ width: '100%' }} enterButton/>
            </Space>
        </div>
    );
}

export { FilterCards };
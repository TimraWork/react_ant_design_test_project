import React, {useContext} from 'react';
import { Input, Space } from 'antd';
import { CardContext } from '../../localState/cardContext';
import './FilterCards.scss';

const { Search } = Input;

export type IFilterCardsProps = {
    
}

const FilterCards: React.FC<IFilterCardsProps> = ({ }) => {
    //@ts-ignore
    const { dispatchCard } = useContext(CardContext); 

    const onSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatchCard({
            type: 'delete',
            payload: {
                searchValue: e.target.value
            }
        })
    }

    return (
        <div className="FilterCards">
            <Space direction="horizontal" size="large" >
                <Search placeholder="Поиск" onChange={onSearch} style={{ width: '100%' }} enterButton/>
            </Space>
        </div>
    );
}

export { FilterCards };
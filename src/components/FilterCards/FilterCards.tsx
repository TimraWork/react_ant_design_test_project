import React from 'react';
import { Input, Space } from 'antd';
import './FilterCards.scss';

const { Search } = Input;

export type IFilterCardsProps = {
    
}

const FilterCards: React.FC<IFilterCardsProps> = ({ }) => {
    return (
        <div className="FilterCards">
            <Space direction="horizontal" size="large" >
                <Search placeholder="Поиск" /* onSearch={onSearch} */ style={{ width: '100%' }} />
            </Space>
        </div>
    );
}

export { FilterCards };
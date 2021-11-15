import React from 'react';
import { Input, Space } from 'antd';
import './FilterCards.scss';

const { Search } = Input;

export type ICardItemProps = {
    onSearch: (value: string) => void
}

const FilterCards: React.FC<ICardItemProps> = ({ onSearch }) => {
    return (
        <div className="FilterCards">
            <Space direction="horizontal" size="large" >
                <Search placeholder="Поиск" onSearch={onSearch} allowClear style={{ width: '100%' }} enterButton/>
            </Space>
        </div>
    );
}

export { FilterCards };
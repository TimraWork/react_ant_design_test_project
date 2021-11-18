import React from 'react';
import { Input, Space } from 'antd';
import './FilterCards.scss';

export type ICardItemProps = {
    onSearch: (value: string) => void
}

const FilterCards: React.FC<ICardItemProps> = ({ onSearch }) => {
    return (
        <div className="FilterCards">
            <Space direction="horizontal" size="large" >
                <Input placeholder="Поиск" allowClear onChange={(e:React.ChangeEvent<HTMLInputElement>) => onSearch(e.target.value)}/>
            </Space>
        </div>
    );
}

export { FilterCards };
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Categories from './Categories';
import NewsList from './NewsList';

const NewsAppBlock = styled.div`
    width: 100%;
    height: 100%;
    /* overflow-y: auto; */
`;

const NewsApp = () => {
    const [category, setCategory] = useState('all');
    const onSelect = useCallback(category => setCategory(category), []);

    return (
        <NewsAppBlock>
            <Categories category={category} onSelect={onSelect} />
            <NewsList category={category} />
        </NewsAppBlock>
    );
};

export default NewsApp;
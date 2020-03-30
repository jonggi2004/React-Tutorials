// eslint-disable-next-line no-unused-vars
import React, { useState, useCallback } from 'react';
import styled from 'styled-components'
import NewsList from './NewsList';
import CategoriesRoute from './CategoriesRoute';

const NewsAppBlock = styled.div`
    width: 100%;
    height: 100%;
    /* overflow-y: auto; */
`;

const NewsAppRoute = ({ match }) => {
    const category = match.params.category || 'all';

    return (
        <NewsAppBlock>
            <CategoriesRoute />
            <NewsList category={category} />
        </NewsAppBlock>
    );
};

export default NewsAppRoute;
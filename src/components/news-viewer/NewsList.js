/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../../lib/usePromise';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

// const sampleArticle = {
//     title: '제목',
//     description: '내용',
//     url: 'https://google.com',
//     urlToImage: 'https://via.placeholder.com/160',
// };

const NewsList = ({ category }) => {
/*
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        // async 사용함수 선언
        const fetchData = async () => {
            setLoading(true);
            try {
                const query = category === 'all' ? '' : `&category=${category}`;
                const url = `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=14adb667a1c34051ae30dcad6919c592`;
                const response = await axios.get(url);
                setArticles(response.data.articles);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, [category]);

    // 로딩중
    if(loading) {
        return <NewsListBlock>로딩중...</NewsListBlock>
    }

    // No articles
    if(!articles) {
        return null;
    }

    // OK
    return (
        <NewsListBlock>
            //<NewsItem article={sampleArticle} />
            {articles.map(article => (
                <NewsItem key={article.url} article={article}/>
            ))}
        </NewsListBlock>
    );
*/
    
    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        const url = `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=14adb667a1c34051ae30dcad6919c592`;
        return axios.get(url);
    }, [category]);

    // 로딩중
    if(loading) {
        return <NewsListBlock>로딩중...</NewsListBlock>
    }

    // No articles
    if(!response) {
        return null;
    }

    // 에러
    if(error) {
        return <NewsListBlock>에러!</NewsListBlock>;
    }

    // reponse 확인
    const { articles } = response.data;
    
    // OK
    return (
        <NewsListBlock>
            {/* <NewsItem article={sampleArticle} /> */}
            {articles.map(article => (
                <NewsItem key={article.url} article={article}/>
            ))}
        </NewsListBlock>
    );
};

export default NewsList;
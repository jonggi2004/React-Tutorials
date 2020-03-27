import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import styled from 'styled-components'
import AxiosTest from 'components/axios-test/AxiosTest';
import NewsApp from '../news-viewer/NewsApp';
import NewsAppRoute from '../news-viewer/NewsAppRoute';
import Cleanup from '../hooks-sample/Cleanup';

class Main extends Component {
    render() {
        // styled-components
        const MainContainerBlock = styled.div`
            width: 100%;
            height: 100%;
            position: relative;
            overflow: hidden;
            .Main-aside {
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                width: 20vw;
                height: 100%;
                overflow: hidden;
                background-color: whitesmoke;
                border-right: 2px dotted #333;
                aside {
                    width: 100%;
                    height: 100%;
                    overflow-y: auto;
                    ul {
                        padding: 1rem;
                        display: flex;
                        flex-direction: column;
                        li {
                            font-size: 1.25rem;
                            cursor: pointer;
                            a {
                                color: black;
                                &:hover {
                                    color: #333;
                                }
                            }
                        }
                    }
                }
            }
            .Main-content {
                position: absolute;
                top: 0;
                left: 20vw;
                right: 0;
                bottom: 0;
                height: 100%;
                overflow: hidden;
                background-color: lightgray;
            }
        `;

        const Blank = () => {
            return <div></div>;
        };

        const categories = [
            {
                linkUrl: '/',
                linkName: '빈페이지',
            },
            {
                linkUrl: '/hooks',
                linkName: 'hooks',
            },
            {
                linkUrl: '/axios',
                linkName: 'axios',
            },
            {
                linkUrl: '/news',
                linkName: 'news',
            },
            {
                linkUrl: '/newsRoute',
                linkName: '뉴스라우트'
            }
        ];

        return (
        <MainContainerBlock>
            <div className="Main-aside">
                <aside>
                    <ul>
                    {categories.map(c => (
                        <li key={c.linkName}>
                            <Link to={c.linkUrl}>{c.linkName}</Link>
                        </li>
                    ))}
                    </ul>
                </aside>
            </div>
            <div className="Main-content">
                <Switch>
                    <Route path={["/"]} component={Blank} exact={true} />
                    <Route path={["/hooks"]} component={Cleanup} />
                    <Route path={["/axios"]} component={AxiosTest} />
                    <Route path={["/news"]} component={NewsApp} />
                    <Route path={["/newsRoute/:category?"]} component={NewsAppRoute} />
                </Switch>
            </div>
        </MainContainerBlock>
        );
    }
}

export default Main;
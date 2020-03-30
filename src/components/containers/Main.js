import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';
import ScrollBox from '../ref-sample/ScrollBox';
import Game from '../tic-tac-toe/Game';
import PhoneBookApp from '../phone_book/PhoneBookApp';
import TodoListApp from '../todo_list/TodoListApp';
import HooksApp from '../hooks-sample/HooksApp';
import ImmerApp from '../immer-sample/ImmerApp';
import AxiosTest from '../axios-test/AxiosTest';
import NewsApp from '../news-viewer/NewsApp';
import NewsAppRoute from '../news-viewer/NewsAppRoute';
import Profile from '../router/Profile';
import About from '../router/About';
import Profiles from '../router/Profiles';
import ProfilesNavLink from '../router/ProfilesNavLink';
import HistorySample from '../router/HistorySample';
import ContextApp from '../context-sample/ContextApp';

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
                linkUrl: '/scrollbox',
                linkName: '스크롤박스',
            },
            {
                linkUrl: '/game',
                linkName: 'Game',
            },
            {
                linkUrl: '/phone',
                linkName: 'PhoneBook',
            },
            {
                linkUrl: '/todo',
                linkName: 'Todo',
            },
            {
                linkUrl: '',
                linkName: '━━Router Sameples━━'
            },
            {
                linkUrl: '/profile/velog',
                linkName: '라우터 파라미터(/velog)',
            },
            {
                linkUrl: '/profile/albert',
                linkName: '라우터 파라미터(/albert)',
            },
            {
                linkUrl: '/about?detail=true',
                linkName: '라우터 쿼리(?)'
            },
            {
                linkUrl: '/profiles',
                linkName: '서브 라우터(withRouter)',
            },
            {
                linkUrl: '/profilesNav',
                linkName: 'NavLink',
            },
            {
                linkUrl: '/history',
                linkName: 'History'
            },
            {
                linkUrl: '',
                linkName: '━━━━━━━━━━━━'
            },
            {
                linkUrl: '/hooks',
                linkName: 'Hooks',
            },
            {
                linkUrl: '/immer',
                linkName: 'Immer',
            },
            {
                linkUrl: '/axios',
                linkName: 'Axios',
            },
            {
                linkUrl: '/news',
                linkName: 'News',
            },
            {
                linkUrl: '/newsRoute',
                linkName: 'News-route'
            },
            {
                linkUrl: '/context',
                linkName: 'Context',
            },
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
                    <Route path={"/scrollbox"} component={ScrollBox}/>
                    <Route path={["/game"]} component={Game} />
                    <Route path={["/phone","/phonebook"]} component={PhoneBookApp}/>
                    <Route path={["/todo","/todolist"]} component={TodoListApp}/>
                    <Route path="/profile/:username" component={Profile}/>
                    <Route path="/about" component={About}/>
                    <Route path="/profiles" component={Profiles}/>
                    <Route path="/profilesNav" component={ProfilesNavLink}/>
                    <Route path="/history" component={HistorySample}/>
                    <Route path={["/hooks"]} component={HooksApp} />
                    <Route path={["/immer"]} component={ImmerApp} />
                    <Route path={["/axios"]} component={AxiosTest} />
                    <Route path={["/news"]} component={NewsApp} />
                    <Route path={["/newsRoute/:category?"]} component={NewsAppRoute} />
                    <Route path="/context" component={ContextApp}/>
                    <Route 
                        // path를 지정하지 않고 Switch와 함께 사용하면 정의 되지 않는 페이지를 지정할 수 있다
                        // 예외 처리 (else) render를 통해 임의 처리가 가능하다
                        render={({location}) => (
                        <div>
                            <h2>이 페이지는 존재하지 않습니다.</h2>
                            <p>{location.pathname}</p>
                        </div>
                    )}
                    />
                </Switch>
            </div>
        </MainContainerBlock>
        );
    }
}

export default Main;
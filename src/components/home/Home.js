import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import './Home.css'
import TodoListApp from 'components/todo_list/TodoListApp';
import PhoneBookApp from 'components/phone_book/PhoneBookApp';
import Game from 'components/tic-tac-toe/Game';
import Profile from 'components/router/Profile';
import About from 'components/router/About';
import Profiles from 'components/router/Profiles';
import ProfilesNavLink from 'components/router/ProfilesNavLink';
import HistorySample from 'components/router/HistorySample';
import AxiosTest from 'components/axios-test/AxiosTest';
import NewsList from 'components/news-viewer/NewsList';
import RefSample from '../ref-sample/RefSample';
import ContextApp from '../context-sample/ContextApp';
import ScrollBox from '../ref-sample/ScrollBox';

// 라우트, 링크, 스위치

const Blank = () => {
    return <div></div>;
}

class Home extends Component {

    render() {
        return (
            <div>
                <ul className="navi">
                    <li>
                        <Link to="/">빈페이지</Link>
                    </li>
                    <li>
                        <Link to="/phone">폰북</Link>
                    </li>
                    <li>
                        <Link to="/game">게임</Link>
                    </li>
                    <li>
                        <Link to="/todo">할일</Link>
                    </li>
                    <li>
                        <Link to="/profile/velog">벨로그-라우터 파라미터</Link>
                    </li>
                    <li>
                        <Link to="/profile/albert">알버트-라우터 파라미터</Link>
                    </li>
                    <li>
                        <Link to="/about?detail=true">라우터 쿼리 소개</Link>
                    </li>
                    <li>
                        <Link to="/profiles">서브 라우터</Link>
                    </li>
                    <li>
                        <Link to="/profilesNav">NavLink</Link>
                    </li>
                    <li>
                        <Link to="/history">History</Link>
                    </li>
                    <li>
                        <Link to="/axios">axios</Link>
                    </li>
                    <li>
                        <Link to="/news">news</Link>
                    </li>
                    <li>
                        <Link to="/scroll">scroll</Link>
                    </li>
                    <li>
                        <Link to="/ref">ref</Link>
                    </li>
                    <li>
                        <Link to="/context">context</Link>
                    </li>
                </ul>
                <hr />
                <Switch>
                    <Route path="/" component={Blank} exact={true}/>
                    <Route path="/game" component={Game}/>
                    <Route path={["/phone","/phonebook"]} component={PhoneBookApp}/>
                    <Route path={["/Todo","/TodoList"]} component={TodoListApp}/>
                    <Route path="/profile/:username" component={Profile}/>
                    <Route path="/about" component={About}/>
                    <Route path="/profiles" component={Profiles}/>
                    <Route path="/profilesNav" component={ProfilesNavLink}/>
                    <Route path="/history" component={HistorySample}/>
                    <Route path="/axios" component={AxiosTest}/>
                    <Route path="/news" component={NewsList}/>
                    <Route path="/scroll" component={ScrollBox}/>
                    <Route path="/ref" component={RefSample}/>
                    <Route path="/context" component={ContextApp}/>
                    <Route 
                        // path를 정의하지 않으면 모든 상황에 렌더링됨,else,예외 처리
                        render={
                            ({location}) => (
                                <div>
                                    <h2>이 페이지는 존재하지 않습니다.</h2>
                                    <p>{location.pathname}</p>
                                </div>
                            )
                        }
                    />
                </Switch>
            </div>
        );
    }
}

export default Home;
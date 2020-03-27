import React from 'react';
import { Route, NavLink } from 'react-router-dom'
import Profile from './Profile'
import WithRouterSample from './WithRouterSample';

// 서브 라우터
// activeStyle, activeClassName 설정 오류/확인

const ProfilesNavLink = () => {
    const activeStyle = {
        background: 'black',
        color: 'white'
    };

    return (
        <div>
            <WithRouterSample />
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    <NavLink activeStyle={activeStyle} to="/profiles/velog" active={true}>velog</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={activeStyle} to="/profiles/albert">albert</NavLink>
                </li>
            </ul>

            <Route path="/profiles" exact={true} render={() => <div>사용자를 선택해 주세요.</div>}/>
            <Route path="/profiles/:username" component={Profile}/>
        </div>
    );
};

export default ProfilesNavLink;
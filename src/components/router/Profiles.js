import React from 'react';
import { Link, Route } from 'react-router-dom'
import Profile from './Profile'
import WithRouterSample from './WithRouterSample';

// 서브 라우터

const Profiles = () => {
    return (
        <div>
            <WithRouterSample />
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    <Link to="/profiles/velog">velog</Link>
                </li>
                <li>
                    <Link to="/profiles/albert">albert</Link>
                </li>
            </ul>

            <Route path="/profiles" exact={true} render={() => <div>사용자를 선택해 주세요.</div>}/>
            <Route path="/profiles/:username" component={Profile}/>
        </div>
    );
};

export default Profiles;
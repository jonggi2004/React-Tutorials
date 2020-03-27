import React from 'react';
import qs from 'qs';
import WithRouterSample from './WithRouterSample';

// props.location 객체를 통한 URL 쿼리 가져오기

const About = ({location}) => {
    const {pathname, search, hash, key} = location;
    const query = qs.parse(location.search, {ignoreQueryPrefix: true});

    return (
        <div>
            <WithRouterSample />
            <h1>라우터 쿼리변수</h1>
            <p>pathname: {pathname}</p>
            <p>search  : {search}</p>
            <p>hash    : {hash}</p>
            <p>key     : {key}</p>
            {query.detail === 'true' ? <p>detail값은 [{query.detail}] 입니다.</p> : <p>detail값은 {query.detail} 입니다.</p>}
            
            {/* {JSON.stringify(query)} */}
        </div>
    );
};

export default About;
import React from 'react';
import WithRouterSample from './WithRouterSample';

// props.match 를 통한 URL 파라미터 가져오기

const data = {
    velog: {
        name: '벨로그',
        description: '벨로그벨로그벨로그',
    },
    albert: {
        name: '알버트',
        description: '알버트알버트알버트',
    }
}

const Profile = ({match}) => {
    const {username} = match.params;
    const profile = data[username];

    if(!profile) {
        return <div>존재하지 않는 사용자입니다.</div>
    }
    return (
    <>
        <WithRouterSample />
        <div>
            <h3>{username}({profile.name})</h3>
            <p>{profile.description}</p>
        </div>
    </>
    );
};

export default Profile;
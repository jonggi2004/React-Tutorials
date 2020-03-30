import React from 'react';
import ScrollBoxApp from './ScrollBoxApp';
import RefSample from './RefSample';
import styled from 'styled-components';

// 스타일 블럭은 반드시 대문자로 시작
const RefAppBlock = styled.div`
    h2 {
        font-size: 2rem;
        font-weight: bold;
        color: #333;
    }
`;

const RefApp = () => {
    return (
        <RefAppBlock>
            <h2>Ref Dom 지정하기</h2>
            <p>Dom의 focus하거나 height 같은 정보를 알기위해 레퍼런스 지정이 필요하다.</p>
            <p>height 같은 정보는 render가 종료된 후 얻어야 하므로, LifeCycle API를 사용해야함.</p>
            <hr />
            <ScrollBoxApp />
            <hr />
            <RefSample />
            <hr />
        </RefAppBlock>
    );
};

export default RefApp;
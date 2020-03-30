import React from 'react';
import ImmerTemplate from './ImmerTemplate';
import ImmerTemplate1 from './ImmerTemplate1';
import ImmerTemplate2 from './ImmerTemplate2';

const ImmerApp = () => {
    return (
        <div style={{height: '100%', overflowY: 'scroll'}}>
            <h2>불변성 유지: 기본</h2>
            <ImmerTemplate />
            <hr />
            <h2>불변성 유지: Immer</h2>
            <ImmerTemplate1 />
            <hr />
            <h2>불변성 유지: Immer (파라미터 생략)</h2>
            <ImmerTemplate2 />
        </div>
    );
};

export default ImmerApp;
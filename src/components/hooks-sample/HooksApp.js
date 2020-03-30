import React, { useState } from 'react';
import Counter from './Counter';
import ReducerCounter from './ReducerCounter';
import ReducerInfo from './ReducerInfo';
import MemoAverage from './MemoAverage';
import MemoAverageCallback from './MemoAverageCallback';
import Info from './Info';
import InfoCustom from './InfoCustom';


const HooksApp = () => {
    const [visible, setvisible] = useState(false);
    
    return (
        <div style={{height: '100%'}}>
            <button onClick={() => setvisible(!visible)}>{visible ? '숨기기' : '보이기'}</button>
            <hr />
            {visible && <Counter />}
            <hr />
            {visible && <Info />}
            <hr />
            {visible && <ReducerCounter />}
            <hr />
            {visible && <ReducerInfo />}
            <hr />
            {visible && <MemoAverage />}
            <hr />
            {visible && <MemoAverageCallback />}
            <hr />
            {visible && <InfoCustom />}
        </div>
    );
};

export default HooksApp;
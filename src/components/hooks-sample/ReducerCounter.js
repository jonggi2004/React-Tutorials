import React, {useReducer} from 'react';

function reducer(state, action) {
    // action.type에 따라 다른 작업 수행
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 }
        case 'DECREMENT':
            return { value: state.value - 1 }
        default:
            // 기존상태 반환
            return state;
    }
}

const ReducerCounter = () => {
    // state 는 현재 값
    // dispatch는 액션을 발생시키는 함수 ex) dispatch(action)
    // 함수 action은 인자로 state 와 전달받은값 action 을 갖는다. ex) action(state, action)
    // userReducer는 dispatch가 발생할 때 동작할 함수와, state의 값을 갖는다.
    const [state, dispatch] = useReducer(reducer, { value: 0 });

    return (
        <div>
            <h3>리듀서 적용</h3>
            <p>현재 카운터: <b>{state.value}</b></p>
            <button onClick={() => dispatch({type: 'INCREMENT'})}> +1 </button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}> -1 </button>
        </div>
    );
};

export default ReducerCounter;
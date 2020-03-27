import React, { useState, useMemo, useCallback, useRef } from 'react';


// input에 onChange 될 때도 평균값을 계산하게된다.
// useMemo를 사용하여 onInsert 일 때만 동작하게 하자.
const getAverage = numbers => {
    console.log('평균값 계산 중...');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

const MemoAverageCallback = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);


    // 컴포넌트가 처음 렌더링될 때만 함수가 생성된다
    // 기존값을 조회하지 않고 값을 직접 설정하기 때문에 재생성될 필요가 없다
    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []);

    // number, list 가 바뀌었을 때만 함수가 생성된다
    // 기존 값을 조회하여 nextList를 생성하기 때문에 반드시 재생성 과정이 필요하다
    const onInsert = useCallback(e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    }, [number, list]);

    // useMemo의 첫번째 인자는 실행할 함수, 두번째 인자는 변경 체크대상
    const avg = useMemo(() => getAverage(list), [list]);

    // useRef 또 다른 사용법
    // 변경이 발생해도 rendering 이 발생하지 않는다
    // class 에서의 render() 밖의 일반 변수와 같다
    const id = useRef(1);
    let x = 1;
    return (
        <div>
            <h3>useMemo + useCallback 적용</h3>
            <input value={number} onChange={onChange} ref={inputEl} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map(
                    (value, index) => (
                        <li key={index}>{value}</li>
                    )
                )}
            </ul>
            <div>
                {/* <b>평균값: {getAverage(list)}</b> */}
                <b>평균값: {avg}</b>
            </div>
            <div>{id.current++}</div>
            <div>{x++}</div>
        </div>
    );
};

export default MemoAverageCallback;
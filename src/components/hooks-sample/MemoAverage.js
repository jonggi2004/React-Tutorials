import React, { useState, useMemo } from 'react';

// input에 onChange 될 때도 평균값을 계산하게된다.
// useMemo를 사용하여 onInsert 일 때만 동작하게 하자.
const getAverage = numbers => {
    console.log('평균값 계산 중...');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

const MemoAverage = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    
    const onChange = e => {
        setNumber(e.target.value);
    };

    const onInsert = e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    };

    // useMemo의 첫번째 인자는 실행할 함수, 두번째 인자는 변경 체크대상
    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <h3>useMemo 적용</h3>
            <input value={number} onChange={onChange} />
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
        </div>
    );
};

export default MemoAverage;
import React, { useState, useEffect } from 'react';

const Info = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');

    const onChangeId = e => {
        setId(e.target.value);
    }

    const onChangeName = e => {
        setName(e.target.value);
    }

    // useEffect(함수, [배열])
    // 컴포넌트가 렌더링 될때, componentDidMount, componentDidUpdate, componentWillMount 에 동작한다.
    // 함수 파라미터의 return 값으로 Cleanup(뒷정리) 함수를 전달하면 컴포넌트가 언마운트 될때 동작한다.
    // 배열 파라미터를 빈값으로 넣으면 componentDidMount일 때만 동작한다
    // 배열 파라미터에 값을 넣으면 해당 값이 변할 때(componentDidUpdate) 만 동작한다.
    useEffect(() => {
        console.log('Rendering Complete!: Run useEffect!');
        console.log({id, name});
        return () => {
            console.log('Run Cleanup Function!');
        };
    // eslint-disable-next-line
    }, [name]);
    //}, []);

    return (
        <div>
            <input value={id} onChange={onChangeId} />
            <input value={name} onChange={onChangeName} />
            <p><b>ID: {id}</b></p>
            <p><b>NAME: {name}</b></p>
        </div>
    );
};

export default Info;
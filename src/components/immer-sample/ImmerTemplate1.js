import React, { useState, useCallback, useRef } from 'react';
import produce from 'immer';

const ImmerTemplate1 = () => {
    const [form, setForm] = useState({name: '', username: ''});
    const [data, setData] = useState({array: [], uselessValue: null});
    const nextId = useRef(1);

    // 데이터 입력
    const onChange = useCallback(e => {
        const { name, value } = e.target;
        setForm(produce(form, draft => {
            draft[name] = value;
        }));
    }, [form]);

    // 데이터 전송
    const onSubmit = useCallback(e => {
        e.preventDefault();
        const info = {
            id: nextId.current,
            name: form.name,
            username: form.username,
        }
        // 새 항목 등록
        setData(produce(data, draft => {
            draft.array.push(info);
        }));
        
        // 초기화
        setForm({
            name: '',
            username: '',
        });
        nextId.current += 1;
    }, [data, form.name, form.username]);

    const onRemove = useCallback(id => {
        setData(produce(data, draft => {
            draft.array.splice(draft.array.findIndex(info => info.id === id), 1);
        }));
    }, [data]);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    name="username"
                    placeholder="아이디"
                    value={form.username}
                    onChange={onChange}
                />
                <input 
                    name="name"
                    placeholder="이름"
                    value={form.name}
                    onChange={onChange}
                />
                <button type="submit">등록</button><span> Next KEY: {nextId.current}</span>
            </form>
            <div>
                <ul style={{padding: 0}}>
                    {data.array.map(info => (
                        <li style={{border: '1px solid whitesmoke', listStyle: 'none', marginBottom: '5px'}}
                        key={info.id} onClick={() => onRemove(info.id)}>KEY: {info.id}, 아이디: {info.username}, 이름: {info.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ImmerTemplate1;
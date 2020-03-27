import React from 'react';
import useInputs from './useInputs';

const InfoCustom = () => {
    const [state, onChange] = useInputs({
        name: '',
        nickname: ''
    });

    const { name, nickname } = state;

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <b>이름: {name}</b><br/>
                <b>닉네임: {nickname}</b>
            </div>
        </div>
    );
};

export default InfoCustom;
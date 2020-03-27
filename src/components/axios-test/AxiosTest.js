import React, { useState } from 'react';
import axios from 'axios'

const AxiosTest = () => {
    const [data, setData] = useState(null);
    const onClick = () => {
        //axios.get('https://jsonplaceholder.typicode.com/todos/1').then(
        axios.get('http://newsapi.org/v2/top-headlines?country=kr&apiKey=14adb667a1c34051ae30dcad6919c592').then(
            response => { setData(response.data); }
        );
    };

    const onClickAsync = async () => {
        try {
            //const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            const response = await axios.get('http://newsapi.org/v2/top-headlines?country=kr&apiKey=14adb667a1c34051ae30dcad6919c592');
            setData(response.data);   
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div>
                <button onClick={onClick}>불러오기(Promise.then)</button>
                <button onClick={onClickAsync}>불러오기(async)</button>
            </div>
            {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
        </div>
    );
};

export default AxiosTest;
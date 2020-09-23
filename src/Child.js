import React from 'react';
import { useEffect } from 'react';

const Child = () => {

    const loadData = async () => {
        let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
        let response = await fetch(url);
        let result = await response.json();
        console.log(result)
    }
    useEffect(loadData(), []);


    return (
        <div>
            <h1>hello Universe</h1>
        </div>
    )
}

export default Child;
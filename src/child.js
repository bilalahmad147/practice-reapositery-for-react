import React from 'react';

const Child = ({name,price}) => {
    return (
        <div>
            <h2>Name: {name} <br /> Price: {price}</h2>
        </div>
    )
};

export default Child;
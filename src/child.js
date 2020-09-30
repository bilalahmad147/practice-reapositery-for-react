import React from 'react';

const Child = ({ name, price, id }) => {

    return (
        <div>
            <h2>Name: {name} <br /> Price: {price} id={id}</h2>
        </div>
    )
};

export default Child;
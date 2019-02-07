import React from 'react';

const input = (props) => {
    return (
        <input onChange={props.inputHandler} value={props.username}/>
    );
}

export default input;
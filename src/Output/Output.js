import React from 'react';
import './output.css';

const output = (props) => {
    return (
        <div className='borderedBox'>
            <p>Username: {props.username} </p>
            <p>Default text here!</p>
        </div>
    );
}

export default output;
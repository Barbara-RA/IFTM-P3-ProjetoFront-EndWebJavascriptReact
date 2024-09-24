import React from 'react';

function Box(props) {
    return (
        <div className='boxInfo'>
            <p>{props.texto}</p>
        </div>
    );
}

export default Box;

import React from 'react';

function Apresentacao({titulo, subtitulo}) {
    return (
        <div className='centralizar'>
            <h2>{titulo}</h2>
            <p>{subtitulo}</p>
        </div>
        
    );
}

export default Apresentacao;
import React from 'react';
import Box from './Box';

function Boxes({infoBoxes}) {

    function showBoxes() {
        return infoBoxes.map(box=> (<Box key={box.key} info={box.info}/>
        ));
    }

    return (
        <div className='conteinerSecao'>
            {showBoxes()}
        </div>
    );
}

export default Boxes;
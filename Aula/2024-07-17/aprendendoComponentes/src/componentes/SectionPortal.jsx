import React from 'react';
import Apresentacao from './Apresentacao';
import Boxes from './Boxes';

function SectionPortal() {
    const infoBoxes2= [
        { info: "Informação da caixa 1 seção 02", key:"15"},
        { info: "Informação da caixa 8 seção 02", key:"67"}
    ];

    return (
        <section>
            <Apresentacao titulo="Titulo Portal" subtitulo="Subtitulo Portal"/>
            <Boxes infoBoxes={infoBoxes2}/>
        </section>
        
    );
}

export default SectionPortal;
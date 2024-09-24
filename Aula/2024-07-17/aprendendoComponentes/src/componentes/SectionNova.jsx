import React from 'react';
import Apresentacao from './Apresentacao';
import Boxes from './Boxes';

function SectionNova() {
    const infoBoxes3= [
        { info: "Informação da caixa 1 seção 03", key:"115"},
        { info: "Informação da caixa 2 seção 03", key:"116"},
        { info: "Informação da caixa 7 seção 03", key:"216"},
        { info: "Informação da caixa 8 seção 03", key:"617"}
    ];

    return (
        <section>
            <Apresentacao titulo="NOVA SEÇÃO" subtitulo="paragrafo"/>
            <Boxes infoBoxes={infoBoxes3}/>
        </section>
    );
}

export default SectionNova;
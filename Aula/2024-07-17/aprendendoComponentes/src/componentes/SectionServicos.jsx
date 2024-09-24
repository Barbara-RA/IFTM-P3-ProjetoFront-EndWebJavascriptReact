import React from 'react';
import Apresentacao from './Apresentacao';
import Boxes from './Boxes';

function SectionServicos() {
    const infoBoxes1= [
        { info: "Informação da caixa 1 seção 01", key:"0"},
        { info: "Informação da caixa 2 seção 01", key:"1"},
        { info: "Informação da caixa 3 seção 01", key:"2"},
        { info: "Informação da caixa 4 seção 01", key:"3"},
        { info: "Informação da caixa 5 seção 01", key:"4"},
        { info: "Informação da caixa 6 seção 01", key:"5"},
        { info: "Informação da caixa 7 seção 01", key:"6"},
        { info: "Informação da caixa 8 seção 01", key:"7"}
    ];

    return (
        <section>
            <Apresentacao titulo="Titulo Serviços" subtitulo="Subtitulo Serviços"/>
            <Boxes infoBoxes={infoBoxes1}/>
        </section>
    );
}

export default SectionServicos;
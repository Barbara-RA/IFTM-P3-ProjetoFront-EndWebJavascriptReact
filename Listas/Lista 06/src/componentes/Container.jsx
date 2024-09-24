import React from 'react';
import Box from './Box';

function Container() {
    const subtitulos = ['Plano de Desenvolvimento Institucional', 'Pesquisa Pública Processos IFM', 'Licitações e Contratos', 'Receitas e Despesas', 'Dados Abertos', 'transparencia e prestação de contas', 'Sevidores', 'Perguntas Frequentes'];
    const boxes = [];

    for (let i = 0; i < subtitulos.length; i++) {
        boxes.push(<Box key={i} texto={subtitulos[i].toUpperCase()} />);
    }

    return (
        <div className="container">
            {boxes}
        </div>
    );
}

export default Container;

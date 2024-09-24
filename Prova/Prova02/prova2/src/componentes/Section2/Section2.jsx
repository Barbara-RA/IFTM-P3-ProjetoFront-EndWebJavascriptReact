import React from 'react';
import TituloEParagrafo from '../TituloEParagrafo/TituloEParagrafo';
import ImagemEDescricao from '../ImagemEDescricao/ImagemEDescricao';
import styles from './Section2.module.css';
import Formulario from '../Formulario.jsx/Formulario';

function Section2() {
    return (
        <section className={styles.section2}>
            <div>
            <div>
            <TituloEParagrafo 
                title="Modelo de páginas de destino que irão surpeeender os clientes mais exigentes" 
                description="Testes seus produtos, mensagens e outras ideias antes do lançamento para rastrear futuros clientes e otimizar as taxas de conversão e transformar pessoas empolgadas com sua marca." 
            />
            <Formulario />
            </div>
            <ImagemEDescricao
                imgSrc="./img/image 2.png"
                description="Portifólio criado com a nossa ferramenta"
            />
            </div>
        </section>
    );
}

export default Section2;
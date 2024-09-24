import React from 'react';
import TituloEParagrafo from '../TituloEParagrafo/TituloEParagrafo';
import ImagemEDescricao from '../ImagemEDescricao/ImagemEDescricao';
import styles from './Section1.module.css';

function Section1() {
    return (
        <section className={styles.section1}>
            <div>
                <TituloEParagrafo
                    title="Crie Landing Pages que realmente convertem os seus usuários"
                    description="Utilize o nosso criador automático de Landing Pages. Basta uma conta gratuita e escolher o melhor template para o seu negócio."
                />
                <ImagemEDescricao
                    imgSrc="./img/image 1.png"
                    description="Template criado com a nossa ferramenta"
                />
            </div>
        </section>
    );
}

export default Section1;

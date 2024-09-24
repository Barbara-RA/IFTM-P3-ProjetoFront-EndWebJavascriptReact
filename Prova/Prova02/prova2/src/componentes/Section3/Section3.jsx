import React from 'react';
import styles from './Section3.module.css';
import FAQ from '../FAQ/FAQ';




function Section3() {
    return (
        <section className={styles.section3}>
            <div>
            <h1>Perguntas Frequentes</h1>
            <FAQ/>
            </div>
        </section>
    );
}

export default Section3;
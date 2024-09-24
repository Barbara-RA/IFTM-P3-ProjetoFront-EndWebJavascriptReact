import { useEffect, useState } from 'react';
import styles from './FAQ.module.css'; // Corrigido: Importação correta do CSS Module

function FAQ() {
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        fetch('https://wilton-filho.github.io/PFJS-GitHub/React/projeto/json/faqprova.json')
            .then(file => file.json())
            .then(info => setFaqs(info.faqs))
            .catch(err => console.error("Erro ao carregar o JSON:", err)); // Adicionei um log de erro para melhorar o debug
    }, []);

    function getPerguntas() {
        if (faqs.length > 0) {
            return (
                faqs.map((faq, index) =>
                    <details key={index}>
                        <summary>{faq.pergunta}</summary>
                        <p>{faq.resposta}</p>
                    </details>
                )
            );
        }
        return <p>Nenhuma FAQ disponível.</p>; // Opcional: mensagem de fallback se não houver FAQs
    }

    return (
        <div className={styles.faq}>  {/* Corrigido: Usando o objeto styles */}
            {getPerguntas()}
        </div>
    );
}

export default FAQ;

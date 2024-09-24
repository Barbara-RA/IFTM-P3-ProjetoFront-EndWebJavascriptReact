import React, { useState } from 'react';
import styles from './formulario.module.css';  // Importando o CSS Module

function Formulario() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);

    function handleChange(e) {
        setEmail(e.target.value);
        setError(false); // Limpa o erro enquanto o usuário digita
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (email === '') {
            setError(true); // Define o erro se o email estiver vazio
            alert('Email em branco. Favor informa-lo');
        } else {
            setError(false);
            alert(`Email enviado: ${email}`);
        }
    }

    return (
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit} className={styles.container}>
                <label htmlFor="email" className={styles.label}>Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={email} 
                    onChange={handleChange} 
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>Enviar</button>
            </form>
            {email && <p className={styles.result}>{email}</p>}
        </div>
    );
}

export default Formulario;

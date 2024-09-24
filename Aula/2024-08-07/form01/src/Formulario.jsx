import React, { useState } from 'react';

function Formulario() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    function handleChange(){

    }

    return (
        <form>
            <label htmlFor="">Nome:</label>
            <input type="text" onChange={(event) => setNome(event.target.value)}/>
            <br />
            <br />

            <label htmlFor="">E-mail:</label>
            <input type="email" onChange={(event) => setEmail(event.target.value)}/>
            
            <p>{nome}</p>
            <p>{email}</p>

        </form>
    );
}

export default Formulario;
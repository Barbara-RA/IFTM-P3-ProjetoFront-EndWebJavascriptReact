import React, { useState } from 'react';

function Formulario02() {

    const [form, setForm] = useState({
        nome: '',
        email: ''
    });
    

    function handleChange(e){
        const{name, value, type} = e.target;
        console.log(name);
        console.log(value);
        console.log(type);

    }

    return (
        <form>
            <label htmlFor="">Nome:</label>
            <input type="text" name='nome' onChange={handleChange}/>
            <br />

            <label htmlFor="">E-mail:</label>
            <input type="email" name='email' onChange={handleChange}/> 
            <p>{form.nome}</p>
            <p>{form.email}</p>       

        </form>
    );
}

export default Formulario02;
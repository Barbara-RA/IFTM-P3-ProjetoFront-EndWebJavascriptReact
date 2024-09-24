import { useState } from 'react';
import './Secao_Conversao.module.css'
import emailjs from '@emailjs/browser';


function Secao_Conversao(){
	
	
	//variavel de estado utiliza a notação de useState
	const [form, setForm] = useState({
		nome: '',
		email: ''
	})

	function getData(e){
		setForm({...form, [e.target.name]: e.target.value});
		console.log(form);
		// console.log(e.target.value)	
		// form[e.target.name] = e.target.value;
		
	}

	// botaão validar
	function validar(){
		if(form.nome ==="" || form.email ===""){
			alert("Todos os campos precisa ser preenchidos")
		}else{
			const templateParms = {
				from_name: form.nome,
				from_email: form.email
			}

			emailjs.send(
				"service_pbagn2m",
				"template_pg9unmb",
				templateParms,
				"QnWpHr_HT-Do_QbYh")
				.then(
					(response) => {
					//   console.log('SUCCESS!', response.status, response.text);
					alert("Email enviado com sucesso")
					},
					(error) => {
					//   console.log('FAILED...', error);
					alert("Erro ao enviar email")
					},
				  );
		}
	}


	return (
		<section>
			<div className='container secaoConversao'>
			<h2>Preencha o Formulário abaixo</h2>
			<p>Vagas limitadas. Clique aqui</p>

		
			<form>
				<label htmlFor="">Nome</label>
				<input type="text" name='nome' onChange={getData} placeholder="Digite seu nome"/>
				<br />
				<label htmlFor="">Email</label>
				<input type="email" name='email' onChange={getData} placeholder="Digite seu email"/>
				<br />
				<input type="button" value='Enviar' onClick={validar} />
			</form>
			
		</div>
		</section>
		
		)
}
export default Secao_Conversao;
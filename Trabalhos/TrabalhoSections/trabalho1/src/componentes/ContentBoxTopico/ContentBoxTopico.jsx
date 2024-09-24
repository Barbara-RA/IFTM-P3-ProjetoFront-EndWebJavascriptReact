import './ContentBoxTopico.module.css'

function ContentBoxTopico(titulo, texto) {
	return (
		<div className={styleSheet.contentBoxTopico}>
			<h3>{titulo}</h3>
			<p>{texto}</p>
		</div>
	);
}
export default ContentBoxTopico;
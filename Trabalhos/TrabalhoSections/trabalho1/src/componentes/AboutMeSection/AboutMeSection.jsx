import ContentBoxTopico from '../ContentBoxTopico/ContentBoxTopico';
import './AboutMeSection.module.css';


function AboutMeSection() {
	const boxTopicos = [
		{ id: 1, titulo: "Formação Acadêmica", texto: "Graduada em Psicologia e pós-graduada em Psicologia Analítica de Carl Gustav Jung. Invisto constantemente em cursos que abordam a cura do feminino, maternidade, autoconhecimento e relacionamentos." },
		{ id: 2, titulo: "Abordagem Terapêutica", texto: "Combino a psicoterapia com a psicoeducação, utilizando as teorias da Análise Transacional, Psicologia Analítica e Psicanálise, para atuar no desenvolvimento da autonomia do paciente." },
		{ id: 3, titulo: "Valores e Missão", texto: "Comprometida com a formação contínua, ajudo minhas clientes a desenvolver autoestima através de um profundo processo de autoconhecimento, com o objetivo de alcançar saúde integral, autonomia e relacionamentos mais saudáveis." },
		{ id: 4, titulo: "Diferenciais", texto: "Trabalho com uma abordagem dinâmica e personalizada, buscando desenvolver a sua autonomia e focando em um processo fluido, com cada vez menos dependência da psicoterapia para compreender conflitos internos e externos." },
		{ id: 5, titulo: "Experiência", texto: "Ministrei palestras e treinamentos na área da saúde, além de atuar com Terapia Sistêmica, o que me possibilitou trabalhar com dinâmicas e padrões familiares." }
	]


	return (
		<section className={StyleSheet.sectionAutoridade}>
			<div>
				{/* Subistituir por um elemento título	 */}
				<h2>Sobre Minha Jornada</h2>
				<div>
					<div>
						<ContentBoxTopico titulo={boxTopicos[0].titulo} texto={boxTopicos[0].texto} />
						<ContentBoxTopico titulo={boxTopicos[1].titulo} texto={boxTopicos[1].texto} />
					</div>
					<div>
						{/* duas imagens */}
					</div>
					<div>
						<ContentBoxTopico titulo={boxTopicos[2].titulo} texto={boxTopicos[2].texto} />
						<ContentBoxTopico titulo={boxTopicos[3].titulo} texto={boxTopicos[3].texto} />
					</div>
				</div>
				<div>
					<ContentBoxTopico titulo={boxTopicos[5].titulo} texto={boxTopicos[3].texto} />
				</div>
			</div>
		</section>
	);



}
export default AboutMeSection;
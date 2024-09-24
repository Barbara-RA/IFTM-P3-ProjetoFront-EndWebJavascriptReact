import PropTypes from 'prop-types';
import React from 'react';
import styles from './TituleEParagrafo.module.css';

function TituloEParagrafo({ title, description }) { 
	return (
		<div className={styles.tituloEParagrafo}>
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	);
}

TituloEParagrafo.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};

export default TituloEParagrafo;

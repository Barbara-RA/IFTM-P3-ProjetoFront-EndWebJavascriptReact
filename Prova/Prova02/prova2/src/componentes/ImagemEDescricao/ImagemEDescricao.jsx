import PropTypes from 'prop-types';
import React from 'react';
import styles from './ImagemEDescricao.module.css';

function ImagemEDescricao({ imgSrc, description }) {  // Recebendo os props
	return (
		<div className={styles.imagemEDescricao}>
			<img src={imgSrc} className={styles.imagem} />
			<p>{description}</p>
		</div>
	);
}

ImagemEDescricao.propTypes = {
	imgSrc: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};

export default ImagemEDescricao;

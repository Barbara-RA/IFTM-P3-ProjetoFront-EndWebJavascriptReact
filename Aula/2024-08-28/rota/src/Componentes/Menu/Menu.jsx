import React from 'react';
import './Menu.module.css';
import { Link } from 'react-router-dom';

function Menu() {
	return (
		<nav>
			<ul>
				<li><Link to="/">Index</Link></li>
				<li><Link to="/contato">Contato</Link></li>
				<li><Link to="/sobreNos">Sobre Nós</Link></li>
				{/* link externos é <a> link de componentes será <Link> */}
			</ul>
		</nav>
	);
}

export default Menu;
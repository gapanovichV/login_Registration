import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const Greeting = () => {
	return (
		<div className="wrapper">
			<div className="greeting_block">
				<div className="button_block">
					<Link to="/Login">
						<button className="button">Login</button>
					</Link>
					<Link to="/Registration">
						<button className="button">Registration</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Greeting;

import { Link } from 'react-router-dom';

const Registration = () => {
	return (
		<div className="wrapper">
			<div className="wrapper_login">
				<h2>Registration</h2>
				<form id="sign_up" className="form">
					<div className="username_block">
						<label htmlFor="username">Username:</label>
						<input id="username" className="username" type="login" placeholder="Username" />
					</div>
					<div className="email_block">
						<label htmlFor="email">Email:</label>
						<input id="email" className="email" type="email" placeholder="Email" />
					</div>
					<div className="password_block">
						<label htmlFor="password">Password:</label>
						<input id="password" className="password" type="password" placeholder="Password" />
					</div>
					<div className="password_retype_block">
						<label htmlFor="password_retype">Retype Password:</label>
						<input
							id="password_retype"
							className="password_retype"
							type="password"
							placeholder="Retype Password"
						/>
					</div>
				</form>
				<div className="login_btn">
					<button form="sign_up" type="submit" className="button">
						Sign up
					</button>
					<Link to="/login">you have account?</Link>
				</div>
			</div>
		</div>
	);
};

export default Registration;

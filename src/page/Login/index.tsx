import { Link } from 'react-router-dom';
import './style.scss';

const Login = () => {
	return (
		<div className="wrapper">
			<div className="wrapper_login">
				<h2>Authorization</h2>
				<form id="sign_in" className="form">
					<div className="username_block">
						<label htmlFor="username">Username or Email:</label>
						<input
							id="username"
							className="username"
							type="Login"
							placeholder="Username or Email"
						/>
					</div>
					<div className="password_block">
						<label htmlFor="password">Password:</label>
						<input id="password" className="password" type="password" placeholder="Password" />
					</div>
				</form>
				<div className="login_btn">
					<button form="sign_in" type="submit" className="button">
						Sign in
					</button>
					<Link to="/registration">need an account?</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;

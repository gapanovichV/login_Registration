import React from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { LoginFormSchema } from '../../utils/schemas/validation';

import './style.scss';

type ILoginForm = Yup.InferType<typeof LoginFormSchema>;

const Login: React.FC = () => {
	const [showPass, setShowPass] = React.useState<boolean>(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm<ILoginForm>({ mode: 'onChange', resolver: yupResolver(LoginFormSchema) });

	const onSubmit: SubmitHandler<ILoginForm> = (data) => {
		alert(JSON.stringify(data, null, 4));
		reset();
	};

	return (
		<div className="wrapper">
			<div className="wrapper_login">
				<h2>Authorization</h2>
				<form onSubmit={handleSubmit(onSubmit)} id="sign_in" className="form">
					<div className="input_form_block">
						<label htmlFor="email">Email</label>
						<input
							id="email"
							className="input_form"
							placeholder="Email"
							type="text"
							autoComplete="on"
							{...register('email')}
						/>
						<span className="error">{errors.email?.message}</span>
					</div>

					<div className="input_form_block">
						<label htmlFor="password">Password</label>
						<input
							type="checkbox"
							onChange={() => {
								setShowPass(!showPass);
							}}
						/>
						<input
							id="password"
							className="input_form"
							placeholder="Password"
							type={showPass ? 'text' : 'password'}
							autoComplete="on"
							{...register('password')}
						/>
						<span className="error">{errors.password?.message}</span>
					</div>

					<div className="login_btn">
						<button disabled={!isValid} form="sign_in" type="submit" className="button">
							Sign in
						</button>
						<Link to="/registration">need an account?</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;

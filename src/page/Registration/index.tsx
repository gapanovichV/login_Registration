import React from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { RegisterFormSchema } from '../../utils/schemas/validation';

import './style.scss';

type IRegisterForm = Yup.InferType<typeof RegisterFormSchema>

const Registration: React.FC = () => {
	const [showPass, setShowPass] = React.useState<boolean>(false);

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<IRegisterForm>({
		mode: 'onChange',
		resolver: yupResolver(RegisterFormSchema),
	});

	const onSubmit: SubmitHandler<IRegisterForm> = (data) => {
		alert(JSON.stringify(data, null, 4));
		reset();
	};

	return (
		<div className="wrapper">
			<div className="wrapper_login">
				<h2>Registration</h2>
				<form action="/#" onSubmit={handleSubmit(onSubmit)} id="sign_up" className="form">
					<div className="input_form_block">
						<label htmlFor="username">Username:</label>
						<input
							id="username"
							className="input_form"
							placeholder="Username"
							type="text"
							autoComplete="on"
							{...register('username')}
						/>
						<span className="error">{errors.username?.message}</span>
					</div>
					<div className="input_form_block">
						<label htmlFor="email">Email:</label>
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
					<div className="input_form_block">
						<label htmlFor="confirm_password">Confirm Password</label>
						<input
							id="confirm_password"
							className="input_form"
							placeholder="Confirm Password"
							type="password"
							autoComplete="on"
							{...register('confirm_password')}
						/>
						<span className="error">{errors.confirm_password?.message}</span>
					</div>
					<div className="login_btn">
						<button disabled={!isValid} form="sign_up" type="submit" className="button">
							Sign up
						</button>
						<Link to="/login">you have account?</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Registration;

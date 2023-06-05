import React from 'react';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { LoginFormSchema } from '../../utils/schemas/validation';
import { ILoginForm } from './login.interface';
import { FormField } from '../../components/FormField';

import './style.scss';

const Login: React.FC = () => {
	const form = useForm<ILoginForm>({ mode: 'onChange', resolver: yupResolver(LoginFormSchema) });

	const onSubmit: SubmitHandler<ILoginForm> = (data) => {
		alert(JSON.stringify(data, null, 4));
		form.reset();
	};
	return (
		<div className="wrapper">
			<div className="wrapper_login">
				<h2>Authorization</h2>
				<FormProvider {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} id="sign_in" className="form">
						<FormField name="username" label="Username" />
						<FormField name="password" label="Password" />
						<div className="login_btn">
							<button
								disabled={!form.formState.isValid}
								form="sign_in"
								type="submit"
								className="button"
							>
								Sign in
							</button>
							<Link to="/registration">need an account?</Link>
						</div>
					</form>
				</FormProvider>
			</div>
		</div>
	);
};

export default Login;

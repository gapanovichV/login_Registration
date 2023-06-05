import React from 'react';
import { Link } from 'react-router-dom';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { RegisterFormSchema } from '../../utils/schemas/validation';
import { IRegisterForm } from './register.interface';
import { FormField } from '../../components/FormField';

import './style.scss';

const Registration: React.FC = () => {
	const form = useForm<IRegisterForm>({
		mode: 'onChange',
		resolver: yupResolver(RegisterFormSchema),
	});

	const onSubmit: SubmitHandler<IRegisterForm> = (data) => {
		alert(JSON.stringify(data, null, 4));
		form.reset();
	};

	return (
		<div className="wrapper">
			<div className="wrapper_login">
				<h2>Registration</h2>
				<FormProvider {...form}>
					<form action="/#" onSubmit={form.handleSubmit(onSubmit)} id="sign_up" className="form">
						<FormField name="username" label="Username" />
						<FormField name="email" label="Email" />
						<FormField name="password" label="Password" />
						<FormField name="confirm_password" label="Confirm Password" />
						<div className="login_btn">
							<button
								disabled={!form.formState.isValid}
								form="sign_up"
								type="submit"
								className="button"
							>
								Sign up
							</button>
							<Link to="/login">you have account?</Link>
						</div>
					</form>
				</FormProvider>
			</div>
		</div>
	);
};

export default Registration;

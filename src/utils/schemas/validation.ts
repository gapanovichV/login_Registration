import * as Yup from 'yup';

export const LoginFormSchema = Yup.object().shape({
	email: Yup.string().email('Email only').required('Email is required'),
	password: Yup.string()
		.required('Password is required')
		.min(4, 'Password length should be at least 4 characters')
		.max(20, 'Password cannot exceed more than 12 characters '),
});

export const RegisterFormSchema = Yup.object()
	.shape({
		username: Yup.string().required('Username is required'),
		confirm_password: Yup.string()
			.required('Confirm Password is required')
			.min(4, 'Password length should be at least 4 characters')
			.max(12, 'Password cannot exceed more than 12 characters')
			.oneOf([Yup.ref('password')], 'Passwords do not match'),
	})
	.concat(LoginFormSchema);

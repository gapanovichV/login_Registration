import React from 'react';
import { useFormContext } from 'react-hook-form';
type FormFieldProps = {
	name: string;
	label: string;
};

export const FormField: React.FC<FormFieldProps> = ({ name, label }) => {
	const [showPass, setShowPass] = React.useState<boolean>(false);
	const {
		register,
		formState: { errors },
	} = useFormContext();
	return (
		<div className="input_form_block">
			<label htmlFor={name}>{label}:</label>
			{name === 'password' && (
				<input
					type="checkbox"
					onChange={() => {
						setShowPass(!showPass);
					}}
				/>
			)}
			<input
				id={name}
				className="input_form"
				placeholder={label}
				type={name === 'password' ? (showPass ? 'text' : 'password') : 'text'}
				autoComplete="on"
				{...register(name)}
			/>
			<span className="error">{errors[name]?.message?.toString()}</span>
		</div>
	);
};

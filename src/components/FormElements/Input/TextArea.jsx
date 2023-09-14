import { Controller } from 'react-hook-form';
import React from 'react';

const Textarea = ({
	disabled,
	name = '',
	defaultValue,
	control,
	placeholder,
	required = false,
	className,
	...restProps
}) => {
	return (
		<div>
			<Controller
				control={control}
				defaultValue={defaultValue}
				name={name}
				render={({ field: { value, onChange } }) => {
					return (
						<div>
							<textarea
								placeholder={placeholder}
								disabled={disabled}
								value={value}
								onChange={onChange}
								required={required}
								className={className}
								{...restProps}
								rows={5}
								cols={73}
							/>
						</div>
					);
				}}
			/>
		</div>
	);
};

export default Textarea;

import { FormErrorMessage, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { Controller } from 'react-hook-form';

const FormInput = ({
	control,
	required,
	name,
	inputProps = {},
	disabled = false,
	inputLeftElement,
	inputRightElement,
	defaultValue = '',
	placeholder = '',
	autoFocus = false,
	validation,
	...props
}) => {
	return (
		<Controller
			name={name}
			control={control}
			defaultValue={defaultValue}
			rules={validation}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<>
					<InputGroup {...props}>
						{inputLeftElement}

						<Input
							value={value}
							onChange={onChange}
							isInvalid={Boolean(error)}
							readOnly={disabled}
							placeholder={placeholder}
							autoFocus={autoFocus}
							{...inputProps}
							required={false}
							height="40px"
						/>

						<InputRightElement width="2.5rem">{inputRightElement}</InputRightElement>
					</InputGroup>

					<FormErrorMessage>{error?.message}</FormErrorMessage>
				</>
			)}
		/>
	);
};

export default FormInput;

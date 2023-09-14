import {
	FormErrorMessage,
	InputGroup,
	InputRightElement,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
} from '@chakra-ui/react';
import { Controller } from 'react-hook-form';

const FormNumberInput = ({
	control,
	required = false,
	name,
	inputProps = {},
	disabled = false,
	inputLeftElement,
	inputRightElement,
	defaultValue = '',
	placeholder = '',
	min,
	max,
	...props
}) => {
	return (
		<Controller
			name={name}
			control={control}
			defaultValue={defaultValue}
			rules={{ required }}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<>
					<InputGroup {...props}>
						{inputLeftElement}
						<NumberInput w="full" value={value} onChange={onChange} min={min} max={max} focusBorderColor="primary.main">
							<NumberInputField h="40px" readOnly={disabled} placeholder={placeholder} required={false} />
						</NumberInput>
					</InputGroup>

					<FormErrorMessage>{error?.message}</FormErrorMessage>
				</>
			)}
		/>
	);
};

export default FormNumberInput;

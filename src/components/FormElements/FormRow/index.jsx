import { Box, FormControl, FormLabel } from '@chakra-ui/react';

const FormRow = ({ label = '', color, required, children, boxProps = {}, ...props }) => {
	return (
		<FormControl {...props} isRequired={required}>
			<FormLabel fontWeight={500} color={color}>
				{label}
			</FormLabel>

			<Box px={'1px'} {...boxProps}>
				{children}
			</Box>
		</FormControl>
	);
};

export default FormRow;

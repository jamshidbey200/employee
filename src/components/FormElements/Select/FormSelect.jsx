import { Select } from 'chakra-react-select';
import { Controller } from 'react-hook-form';
import formatGroupLabel from './formatGroupLabel';

const FormSelect = ({
	control,
	name,
	options = [],
	disabled,
	defaultValue = '',
	customOnChange = () => {},
	required,
	...props
}) => {
	return (
		<Controller
			name={name}
			control={control}
			defaultValue={defaultValue}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<Select
					options={options}
					isReadOnly={disabled}
					// components={{ Option: IconOption, SingleValue: CustomSelectValue }}
					value={options.find((option) => option.value === value)}
					onChange={(val) => {
						onChange(val.value);
						customOnChange(val);
					}}
					// menuPortalTarget={document.body}
					// styles={{
					//   menuPortal: (provided) => ({ ...provided, zIndex: 2 })
					// }}
					styles={{ height: '40px' }}
					formatGroupLabel={formatGroupLabel}
					{...props}
					size="lg"
					required={required}
				/>
			)}
		/>
	);
};

export default FormSelect;

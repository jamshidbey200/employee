import { Box, Button, Heading } from '@chakra-ui/react';
import BackButton from 'components/BackButton';
import FormRow from 'components/FormElements/FormRow';
import FormInput from 'components/FormElements/Input/FormInput';
import FormNumberInput from 'components/FormElements/Input/FormNumberInput';
import FormPhoneInput from 'components/FormElements/Input/FormPhoneInput';
import FormSelect from 'components/FormElements/Select/FormSelect';
import Header, { HeaderExtraSide, HeaderLeftSide, HeaderTitle } from 'components/Header';
import { Page } from 'components/Page';
import PageCard, { PageCardFooter, PageCardForm, PageCardHeader } from 'components/PageCard';
import useCustomToast from 'hooks/useCustomToast';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import queryClient from 'services/queryClient';
import { useUserCreateMutation } from 'services/user.service';
import cls from './index.module.scss';
import { useGetAllDepartmentList } from 'services/department.service';

export default function UsersCards() {
	const navigate = useNavigate();
	const { control, handleSubmit } = useForm({});
	const { successToast } = useCustomToast();

	const { mutate: createUser } = useUserCreateMutation({
		onSuccess: () => {
			queryClient.refetchQueries('DEPARTMENT');
			navigate(-1);
			successToast();
		},
	});

	const { data: designations } = useGetAllDepartmentList({
		params: {
			limit: 10,
			offset: 0,
		},
		tableSlug: '/designations',
	});

	const { data: roles } = useGetAllDepartmentList({
		params: {
			limit: 10,
			offset: 0,
		},
		tableSlug: '/roles',
	});

	// const { data: employees } = useGetAllDepartmentList({
	// 	params: {
	// 		limit: 10,
	// 		offset: 0,
	// 	},
	// 	tableSlug: '/employee',
	// });

	const onSubmit = (values) => {
		const createData = {
			first_name: values.first_name,
			last_name: values.last_name,
			phone_number: values.phone_number,
			address: values.address,
			birth_date: values.birth_date,
			designation_id: values.designation_id,
			email: values.email,
			emergency_contact_name: values.emergency_contact_name,
			emergency_contact_number: values.emergency_contact_number,
			emergency_contact_relation: values.emergency_contact_relation,
			employee_id: 'stringlkkm;',
			gender: values.gender,
			login: values.login,
			marital_status: values.marital_status,
			nationality: values.nationality,
			status: values.status,
			passport_expiry: values.passport_expiry,
			passport_number: values.passport_number,
			password: values.password,
			role_id: values.role_id,
		};

		createUser(createData);
	};

	const genders = [
		{ label: 'male', value: 'male' },
		{ label: 'female', value: 'female' },
	];

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Header>
				<HeaderLeftSide ml={'-40px'}>
					<BackButton />
					<HeaderTitle>Добавить</HeaderTitle>
				</HeaderLeftSide>
				<HeaderExtraSide></HeaderExtraSide>
			</Header>
			<Box borderRadius={'6px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} p={4}>
				<Page h="calc(93vh - 56px)">
					<PageCard w={600}>
						<PageCardHeader>
							<HeaderLeftSide>
								<Heading fontSize="xl">Данные пользователя</Heading>
							</HeaderLeftSide>
						</PageCardHeader>

						<PageCardForm p={6} spacing={8} h="100%" className={cls.form}>
							<FormRow label="Имя:" required={true}>
								<FormInput
									validation={{
										required: {
											value: true,
											message: 'Обязательное поле',
										},
									}}
									control={control}
									name="first_name"
									placeholder="Введите имя пользователя"
									autoFocus
									required={true}
								/>
							</FormRow>
							<FormRow label="Фамилия" required={true}>
								<FormInput
									validation={{
										required: {
											value: true,
											message: 'Обязательное поле',
										},
									}}
									control={control}
									name="last_name"
									placeholder="Введите фамилия"
									required={true}
								/>
							</FormRow>
							<FormRow label="Телефон" required={true}>
								<FormPhoneInput control={control} name="phone_number" required={true} />
							</FormRow>
							<FormRow label="Адрес" required={true}>
								<FormInput
									validation={{
										required: {
											value: true,
											message: 'Обязательное поле',
										},
									}}
									control={control}
									name="address"
									placeholder="Введите адрес"
									required={true}
								/>
							</FormRow>
							<FormRow label="День рождения" required={true}>
								<FormInput
									validation={{
										required: {
											value: true,
											message: 'Обязательное поле',
										},
									}}
									control={control}
									name="birth_date"
									placeholder="Введите день рождения"
									required={true}
								/>
							</FormRow>
							<FormRow label="Электронная почта" required={true}>
								<FormInput
									validation={{
										required: {
											value: true,
											message: 'Обязательное поле',
										},
									}}
									control={control}
									name="email"
									placeholder="Введите электронная почта"
								/>
							</FormRow>
							<FormRow label="Экстренное имя" required={true}>
								<FormInput
									validation={{
										required: {
											value: true,
											message: 'Обязательное поле',
										},
									}}
									control={control}
									name="emergency_contact_name"
									placeholder="Введите экстренное имя"
									required={true}
								/>
							</FormRow>
							<FormRow label="Экстренный номер" required={true}>
								<FormPhoneInput control={control} name="emergency_contact_number" required={true} />
							</FormRow>
							<FormRow label="emergency_contact_relation" required={true}>
								<FormInput
									control={control}
									name="emergency_contact_relation"
									placeholder="Введите emergency_contact_relation"
									required={true}
									validation={{
										required: {
											value: true,
											message: 'Обязательное поле',
										},
									}}
								/>
							</FormRow>
							<FormRow label="Пол" required={true}>
								<FormSelect
									options={genders.map((el) => ({ label: el.label, value: el.value }))}
									control={control}
									name="gender"
									placeholder="Введите пол"
									required={true}
								/>
							</FormRow>
							<FormRow label="Логин" required={true}>
								<FormInput
									validation={{
										required: {
											value: true,
											message: 'Обязательное поле',
										},
									}}
									control={control}
									name="login"
									placeholder="Введите логин"
									required={true}
								/>
							</FormRow>
							<FormRow label="Пароль" required={true}>
								<FormInput
									validation={{
										required: {
											value: true,
											message: 'Обязательное поле',
										},
									}}
									control={control}
									name="password"
									placeholder="Введите пароль"
									required={true}
								/>
							</FormRow>
							<FormRow label="marital_status" required={true}>
								<FormInput
									validation={{
										required: {
											value: true,
											message: 'Обязательное поле',
										},
									}}
									control={control}
									name="marital_status"
									placeholder="Введите marital_status"
									required={true}
								/>
							</FormRow>
							<FormRow label="Национальность" required={true}>
								<FormInput
									validation={{
										required: {
											value: true,
											message: 'Обязательное поле',
										},
									}}
									control={control}
									name="nationality"
									placeholder="Введите национальность"
									required={true}
								/>
							</FormRow>
							<FormRow label="Пасспорт серия" required={true}>
								<FormInput
									validation={{
										required: {
											value: true,
											message: 'Обязательное поле',
										},
									}}
									control={control}
									name="passport_expiry"
									placeholder="Введите пасспорт серия"
									required={true}
								/>
							</FormRow>
							<FormRow label="Пасспорт номер" required={true}>
								<FormNumberInput
									validation={{
										required: {
											value: true,
											message: 'Обязательное поле',
										},
									}}
									control={control}
									name="passport_number"
									placeholder="Введите пасспорт номер"
									required={true}
									min={7}
									max={7}
								/>
							</FormRow>
							<FormRow label="Статус" required={true}>
								<FormInput
									validation={{
										required: {
											value: true,
											message: 'Обязательное поле',
										},
									}}
									control={control}
									name="status"
									placeholder="Введите статус"
									required={true}
								/>
							</FormRow>
							<FormRow label="Обозначение" required>
								<FormSelect
									options={designations?.designations?.map((el) => ({ label: el?.name, value: el?.id }))}
									control={control}
									name="designation_id"
									placeholder="Введите oбозначение"
									required
								/>
							</FormRow>
							<FormRow label="Рол ползователья" required>
								<FormSelect
									options={roles?.roles?.map((el) => ({ label: el?.name, value: el?.id }))}
									control={control}
									name="role_id"
									placeholder="Введите рол ползователя"
									required
								/>
							</FormRow>
							<FormRow label="employee_id">
								<FormSelect
									//  options={employees?.employees?.roles?.map((el) => ({label: el?.name, value: el?.id}))}
									control={control}
									name="employee_id"
									placeholder="Введите employeer"
								/>
							</FormRow>
						</PageCardForm>

						<PageCardFooter mt={6}>
							<Button type="submit" ml="auto">
                Сохранить
							</Button>
						</PageCardFooter>
					</PageCard>
				</Page>
			</Box>
		</form>
	);
}

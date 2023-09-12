import { Button, Heading } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../../../components/BackButton';
import FormRow from '../../../components/FormElements/FormRow';
import FormInput from '../../../components/FormElements/Input/FormInput';
import FormNumberInput from '../../../components/FormElements/Input/FormNumberInput';
import Header, { HeaderExtraSide, HeaderLeftSide, HeaderTitle } from '../../../components/Header';
import SimpleLoader from '../../../components/Loaders/SimpleLoader';
import NotificationMenu from '../../../components/NotificationMenu';
import { Page } from '../../../components/Page';
import PageCard, { PageCardFooter, PageCardForm, PageCardHeader } from '../../../components/PageCard';
import ProfileMenu from '../../../components/ProfileMenu';
import useCustomToast from '../../../hooks/useCustomToast';
import { useUserGetByIdQuery, useUserUpdateMutation } from '../../../services/user.service';
import FormSelect from 'components/FormElements/Select/FormSelect';

const UserDetail = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const { successToast } = useCustomToast();

	const { control, reset, handleSubmit } = useForm({
		defaultValues: {},
	});

	const { isLoading } = useUserGetByIdQuery({
		id: id,
		queryParams: {
			cacheTime: false,
			enabled: Boolean(id),
			onSuccess: reset,
		},
	});

	const { mutate: updateUser, isLoading: updateLoading } = useUserUpdateMutation({
		onSuccess: () => {
			successToast();
			navigate(-1);
		},
	});

	const onSubmit = (values) => {
		const updateData = {
			first_name: values.first_name,
			last_name: values.last_name,
			phone_number: values.phone_number,
			address: values.address,
			birth_date: values.birth_date,
			designation_id: '904e1cb5-467d-11ee-b5c6-02420a00002d',
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
			role_id: 'a23860e2-45b1-11ee-be56-0242ac120002',
		};

		updateUser({
			id: id,
			...updateData,
		});
	};

	if (isLoading) return <SimpleLoader h="100vh" />;

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Header>
				<HeaderLeftSide ml={-10}>
					<BackButton />
					<HeaderTitle>Пользователи</HeaderTitle>
				</HeaderLeftSide>
				<HeaderExtraSide>
					<NotificationMenu />
					<ProfileMenu />
				</HeaderExtraSide>
			</Header>

			<Page p={4} h="calc(100vh - 56px)">
				<PageCard w={600}>
					<PageCardHeader>
						<HeaderLeftSide>
							<Heading fontSize="xl">Данные пользователя</Heading>
						</HeaderLeftSide>
					</PageCardHeader>

					<PageCardForm p={6} spacing={8}>
						{/* <FormRow label="Имя:">
							<FormInput control={control} name="first_name" placeholder="Введите имя пользователя" autoFocus />
						</FormRow>
						<FormRow label="Фамилия:">
							<FormInput control={control} name="last_name" placeholder="Введите фамилию пользователя" />
						</FormRow>
						<FormRow label="Телефон:">
							<FormNumberInput
								control={control}
								name="phone_number"
								placeholder="Введите телефон"
								rules={{ minLength: 14, maxLength: 14 }}
							/>
						</FormRow>
						<FormRow label="Отделение">
							<FormSelect control={control} name="department_id" placeholder="Введите oтделение" />
						</FormRow> */}

						<FormRow label="Имя:">
							<FormInput control={control} name="first_name" placeholder="Введите имя пользователя" autoFocus />
						</FormRow>
						<FormRow label="Фамилия">
							<FormInput control={control} name="last_name" placeholder="Введите фамилия" />
						</FormRow>
						<FormRow label="Телефон">
							<FormInput control={control} name="phone_number" placeholder="Введите телефон" />
						</FormRow>
						<FormRow label="Адрес">
							<FormInput control={control} name="address" placeholder="Введите адрес" />
						</FormRow>
						<FormRow label="День рождения">
							<FormInput control={control} name="birth_date" placeholder="Введите день рождения" />
						</FormRow>
						<FormRow label="Электронная почта">
							<FormInput control={control} name="email" placeholder="Введите электронная почта" />
						</FormRow>
						<FormRow label="Экстренное имя">
							<FormInput control={control} name="emergency_contact_name" placeholder="Введите экстренное имя" />
						</FormRow>
						<FormRow label="Экстренный номер">
							<FormInput control={control} name="emergency_contact_number" placeholder="Введите экстренный номер" />
						</FormRow>
						<FormRow label="emergency_contact_relation">
							<FormInput
								control={control}
								name="emergency_contact_relation"
								placeholder="Введите emergency_contact_relation"
							/>
						</FormRow>
						<FormRow label="Пол">
							<FormInput control={control} name="gender" placeholder="Введите пол" />
						</FormRow>
						<FormRow label="Логин">
							<FormInput control={control} name="login" placeholder="Введите логин" />
						</FormRow>
						<FormRow label="Пароль">
							<FormInput control={control} name="password" placeholder="Введите пароль" />
						</FormRow>
						<FormRow label="marital_status">
							<FormInput control={control} name="marital_status" placeholder="Введите marital_status" />
						</FormRow>
						<FormRow label="Национальность">
							<FormInput control={control} name="nationality" placeholder="Введите национальность" />
						</FormRow>
						<FormRow label="Пасспорт серия">
							<FormInput control={control} name="passport_expiry" placeholder="Введите пасспорт серия" />
						</FormRow>
						<FormRow label="Пасспорт номер">
							<FormInput control={control} name="passport_number" placeholder="Введите пасспорт номер" />
						</FormRow>
						<FormRow label="Статус">
							<FormInput control={control} name="status" placeholder="Введите статус" />
						</FormRow>
						<FormRow label="Обозначение">
							<FormSelect control={control} name="designation_id" placeholder="Введите oбозначение" />
						</FormRow>
						<FormRow label="Рол ползователья">
							<FormSelect control={control} name="role_id" placeholder="Введите рол ползователья" />
						</FormRow>
						<FormRow label="employee_id">
							<FormSelect control={control} name="employee_id" placeholder="Введите employee_id" />
						</FormRow>
					</PageCardForm>

					<PageCardFooter mt={6}>
						<Button isLoading={updateLoading} type="submit" ml="auto">
              Сохранить
						</Button>
					</PageCardFooter>
				</PageCard>
			</Page>
		</form>
	);
};
export default UserDetail;

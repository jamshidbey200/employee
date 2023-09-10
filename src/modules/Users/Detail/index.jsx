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
			address: 'oo',
			birth_date: '19.04.2001',
			designation_id: '904e1cb5-467d-11ee-b5c6-02420a00002d', //
			email: 'yostring@mail.ru',
			emergency_contact_name: 'kjnikj',
			emergency_contact_number: 'kjjnkj',
			emergency_contact_relation: 'kjnkk ',
			employee_id: 'stringlkkm;',
			gender: 'female',
			login: 'string;m;ml', //
			marital_status: 'stringmklkm', //
			nationality: 'stringlkn;kl', //
			passport_expiry: 'stringlkmklm', //
			passport_number: 'stringlkklmmk', //
			password: 'stringcdsfrsfvdswvfslkknlk', //
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
						<FormRow label="Имя:">
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
								// rules={{ minLength: 14, maxLength: 14 }}
							/>
						</FormRow>
						<FormRow label="Отделение">
							<FormSelect control={control} name="department_id" placeholder="Введите oтделение" />
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

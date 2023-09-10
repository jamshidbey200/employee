import { Box, Button, Heading } from '@chakra-ui/react';
import BackButton from 'components/BackButton';
import FormRow from 'components/FormElements/FormRow';
import FormInput from 'components/FormElements/Input/FormInput';
import FormSelect from 'components/FormElements/Select/FormSelect';
import Header, { HeaderExtraSide, HeaderLeftSide, HeaderTitle } from 'components/Header';
import { Page } from 'components/Page';
import PageCard, { PageCardFooter, PageCardForm, PageCardHeader } from 'components/PageCard';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import queryClient from 'services/queryClient';
import { useUserCreateMutation } from 'services/user.service';

export default function UsersCards() {
	const navigate = useNavigate();
	const { control, handleSubmit } = useForm({});
	const pathname = useLocation();

	const { mutate: createUser } = useUserCreateMutation({
		onSuccess: () => {
			queryClient.refetchQueries('DEPARTMENT');
		},
	});

	const onSubmit = (values) => {
		const createData = {
			first_name: values.first_name,
			last_name: values.last_name,
			phone_number: values.phone_number,
			address: 'string',
			birth_date: 'string',
			designation_id: '904e1cb5-467d-11ee-b5c6-02420a00002d',
			email: 'string@mail.ru',
			emergency_contact_name: 'string',
			emergency_contact_number: 'string',
			emergency_contact_relation: 'string',
			employee_id: 'string',
			gender: 'female',
			login: 'string',
			marital_status: 'string',
			nationality: 'string',
			passport_expiry: 'string',
			passport_number: 'string',
			password: 'stringcdsfrsfvdswvfs',
			role_id: 'a23860e2-45b1-11ee-be56-0242ac120002',
		};

		createUser(createData);
	};

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
				<Page>
					{/* h='calc(100vh - 56px)' */}
					<PageCard w={600} h="calc(90vh - 56px)">
						<PageCardHeader>
							<HeaderLeftSide>
								<Heading fontSize="xl">Данные пользователя</Heading>
							</HeaderLeftSide>
						</PageCardHeader>

						<PageCardForm p={6} spacing={8} h="100%">
							<FormRow label="Имя:">
								<FormInput control={control} name="first_name" placeholder="Введите имя пользователя" autoFocus />
							</FormRow>
							<FormRow label="Фамилия">
								<FormInput control={control} name="last_name" placeholder="Введите фамилия" />
							</FormRow>
							<FormRow label="Телефон">
								<FormInput control={control} name="phone_number" placeholder="Введите телефон" />
							</FormRow>
							{/* <FormRow label="Отделение">
								<FormSelect control={control} name="department_id" placeholder="Введите oтделение" />
							</FormRow> */}
						</PageCardForm>

						<PageCardFooter mt={6}>
							<Button
								type="submit"
								ml="auto"
								onClick={() => {
									navigate(-1);
								}}
							>
                Сохранить
							</Button>
						</PageCardFooter>
					</PageCard>
				</Page>
			</Box>
		</form>
	);
}

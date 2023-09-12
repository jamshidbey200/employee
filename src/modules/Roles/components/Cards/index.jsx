import { Box, Button, Heading, Select } from '@chakra-ui/react';
import BackButton from 'components/BackButton';
import FormRow from 'components/FormElements/FormRow';
import FormInput from 'components/FormElements/Input/FormInput';
import FormSelect from 'components/FormElements/Select/FormSelect';
import Header, { HeaderExtraSide, HeaderLeftSide, HeaderTitle } from 'components/Header';
import { Page } from 'components/Page';
import PageCard, { PageCardFooter, PageCardForm, PageCardHeader } from 'components/PageCard';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import queryClient from 'services/queryClient';
import { useRoleCreateMutation, useRoleUpdateMutation } from 'services/roles.service';

export default function RolesCards() {
	const navigate = useNavigate();
	const { control, refetch, handleSubmit } = useForm({});

	const { mutate: createDepartment } = useRoleCreateMutation({
		onSuccess: () => {
			queryClient.refetchQueries('DEPARTMENT');
		},
	});

	const onSubmit = (values) => {
		const createData = {
			name: values.name,
			description: values.description,
		};

		createDepartment(createData);
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
							<FormRow label="Имя:" required>
								<FormInput control={control} name="name" placeholder="Введите имя пользователя" autoFocus required />
							</FormRow>
							<FormRow label="Описание:" required>
								<FormInput control={control} name="description" placeholder="Введите oписание" required />
							</FormRow>
							{/* <FormRow label="Oтделение">
								<FormSelect control={control} name="department_id" placeholder="Введите отделение" />
							</FormRow> */}
						</PageCardForm>

						<PageCardFooter mt={6}>
							<Button type="submit" ml="auto" onClick={() => navigate(-1)}>
                Сохранить
							</Button>
						</PageCardFooter>
					</PageCard>
				</Page>
			</Box>
		</form>
	);
}

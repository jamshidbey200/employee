import { Box, Button, Heading, Select } from '@chakra-ui/react';
import BackButton from 'components/BackButton';
import FormRow from 'components/FormElements/FormRow';
import FormInput from 'components/FormElements/Input/FormInput';
import FormSelect from 'components/FormElements/Select/FormSelect';
import Header, { HeaderExtraSide, HeaderLeftSide, HeaderTitle } from 'components/Header';
import { Page } from 'components/Page';
import PageCard, { PageCardFooter, PageCardForm, PageCardHeader } from 'components/PageCard';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useCreateMutation, useGetByIdQuery, useUpdateMutation } from 'services/department.service';
import queryClient from 'services/queryClient';

export default function Cards({ title = '', count = 0, icon = '' }) {
	const navigate = useNavigate();
	const { id } = useParams();
	const { control, refetch, handleSubmit, reset } = useForm({});

	const pathname = useParams();

	const { mutate: createDepartment } = useCreateMutation({
		onSuccess: () => {
			queryClient.refetchQueries('DEPARTMENT');
		},
	});
	const { mutate: updateDepartment } = useUpdateMutation({
		onSuccess: () => {
			navigate(-1);
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
								<FormInput control={control} name="name" placeholder="Введите название" autoFocus required />
							</FormRow>
							<FormRow label="Описание:" required>
								<FormInput control={control} name="description" placeholder="Введите oписание" required />
							</FormRow>
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

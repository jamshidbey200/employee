import { Box, Button, Heading } from '@chakra-ui/react';
import BackButton from 'components/BackButton';
import FormRow from 'components/FormElements/FormRow';
import FormInput from 'components/FormElements/Input/FormInput';
import FormSelect from 'components/FormElements/Select/FormSelect';
import Header, { HeaderExtraSide, HeaderLeftSide, HeaderTitle } from 'components/Header';
import { Page } from 'components/Page';
import PageCard, { PageCardFooter, PageCardForm, PageCardHeader } from 'components/PageCard';
import useCustomToast from 'hooks/useCustomToast';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDesignationCreateMutation } from 'services/designation.service';
import queryClient from 'services/queryClient';

export default function DesignationsCards() {
	const navigate = useNavigate();
	const { control, handleSubmit } = useForm({});
	const { successToast } = useCustomToast();

	const { mutate: createDesignation } = useDesignationCreateMutation({
		onSuccess: () => {
			queryClient.refetchQueries('DEPARTMENT');
			successToast();
			navigate(-1);
		},
	});

	const onSubmit = (values) => {
		const createData = {
			name: values.name,
			description: values.description,
			department_id: 'b3bd7bf7-467a-11ee-8f0d-02420a000031',
		};

		createDesignation(createData);
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
							<FormRow label="Отделение">
								<FormSelect control={control} name="department_id" placeholder="Введите отделение" />
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

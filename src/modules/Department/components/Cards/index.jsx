import { Box, Button, Heading } from '@chakra-ui/react';
import BackButton from 'components/BackButton';
import FormRow from 'components/FormElements/FormRow';
import FormInput from 'components/FormElements/Input/FormInput';
import Textarea from 'components/FormElements/Input/TextArea';
import Header, { HeaderExtraSide, HeaderLeftSide, HeaderTitle } from 'components/Header';
import { Page } from 'components/Page';
import PageCard, { PageCardFooter, PageCardForm, PageCardHeader } from 'components/PageCard';
import useCustomToast from 'hooks/useCustomToast';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useCreateMutation } from 'services/department.service';
import queryClient from 'services/queryClient';
import cls from './Detail.module.scss';

export default function Cards() {
	const navigate = useNavigate();
	const { successToast } = useCustomToast();
	const { control, handleSubmit } = useForm({});

	const { mutate: createDepartment } = useCreateMutation({
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
					{/* h="calc(90vh - 56px)" */}
					<PageCard w={600}>
						<PageCardHeader>
							<HeaderLeftSide>
								<Heading fontSize="xl">Данные отделение</Heading>
							</HeaderLeftSide>
						</PageCardHeader>

						<PageCardForm p={6} spacing={8} h="100%">
							<FormRow label="Имя:" required>
								<FormInput
									control={control}
									name="name"
									placeholder="Введите название"
									autoFocus
									validation={{
										required: {
											value: true,
											message: 'Обязательное поле',
										},
									}}
								/>
							</FormRow>
							<FormRow label="Описание:" required>
								<Textarea
									className={cls.textarea}
									control={control}
									name="description"
									placeholder="Введите oписание"
									required
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

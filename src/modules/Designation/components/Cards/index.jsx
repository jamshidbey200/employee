import { Box, Button, Heading } from '@chakra-ui/react';
import BackButton from 'components/BackButton';
import FormRow from 'components/FormElements/FormRow';
import FormInput from 'components/FormElements/Input/FormInput';
import Textarea from 'components/FormElements/Input/TextArea';
import FormSelect from 'components/FormElements/Select/FormSelect';
import Header, { HeaderExtraSide, HeaderLeftSide, HeaderTitle } from 'components/Header';
import { Page } from 'components/Page';
import PageCard, { PageCardFooter, PageCardForm, PageCardHeader } from 'components/PageCard';
import useCustomToast from 'hooks/useCustomToast';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useGetAllDepartmentList } from 'services/department.service';
import { useDesignationCreateMutation } from 'services/designation.service';
import queryClient from 'services/queryClient';
import cls from './Detail.module.scss';

export default function DesignationsCards() {
	const navigate = useNavigate();
	const { control, handleSubmit } = useForm({});
	const { successToast } = useCustomToast();

	const { data } = useGetAllDepartmentList({
		params: {
			limit: 10,
			offset: 0,
		},
		tableSlug: '/departments',
	});

	console.log('datas', data);

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
			department_id: values.department_id,
		};

		createDesignation(createData);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Header>
				<HeaderLeftSide ml={'-40px'}>
					<BackButton />
					<HeaderTitle>Добавить обозначение</HeaderTitle>
				</HeaderLeftSide>
				<HeaderExtraSide></HeaderExtraSide>
			</Header>
			<Box borderRadius={'6px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} p={4}>
				<Page>
					{/* h='calc(100vh - 56px)' */}
					<PageCard w={600}>
						<PageCardHeader>
							<HeaderLeftSide>
								<Heading fontSize="xl">Данные об обозначение</Heading>
							</HeaderLeftSide>
						</PageCardHeader>

						<PageCardForm p={6} spacing={8} h="100%">
							<FormRow label="Имя:" required>
								<FormInput
									control={control}
									name="name"
									placeholder="Введите имя пользователя"
									autoFocus
									validation={{
										required: {
											value: true,
											message: 'Обязательное поле',
										},
									}}
								/>
							</FormRow>
							<FormRow label="Отделение" required>
								<FormSelect
									options={data?.departments?.map((el) => ({ label: el?.name, value: el?.id }))}
									control={control}
									name="department_id"
									placeholder="Введите отделение"
									required
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

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
import queryClient from 'services/queryClient';
import cls from './Detail.module.scss';
import { useRoadmapCreateMutation } from 'services/roadmap.service';

export default function RoadmapCards() {
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

	const { mutate: createRoadmap } = useRoadmapCreateMutation({
		onSuccess: () => {
			queryClient.refetchQueries('DEPARTMENT');
			successToast();
			navigate(-1);
		},
	});

	const onSubmit = (values) => {
		const createData = {
			title: values.title,
			description: values.description,
			department_id: values.department_id,
			actions: values.actions,
			short_link: values.short_link,
		};

		createRoadmap(createData);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Header>
				<HeaderLeftSide ml={'-40px'}>
					<BackButton />
					<HeaderTitle>Добавить roadmap</HeaderTitle>
				</HeaderLeftSide>
				<HeaderExtraSide></HeaderExtraSide>
			</Header>
			<Box borderRadius={'6px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} p={4}>
				<Page>
					{/* h='calc(100vh - 56px)' */}
					<PageCard w="100%">
						<PageCardHeader>
							<HeaderLeftSide>
								<Heading fontSize="xl">Данные o roadmap</Heading>
							</HeaderLeftSide>
							<HeaderExtraSide>
								{' '}
								<Button type="submit" ml="auto">
                  Сохранить
								</Button>{' '}
							</HeaderExtraSide>
						</PageCardHeader>
					</PageCard>
				</Page>
			</Box>
		</form>
	);
}

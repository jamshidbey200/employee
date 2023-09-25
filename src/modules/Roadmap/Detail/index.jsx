import { Button, Heading } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../../../components/BackButton';
import FormRow from '../../../components/FormElements/FormRow';
import FormInput from '../../../components/FormElements/Input/FormInput';
import Header, { HeaderExtraSide, HeaderLeftSide, HeaderTitle } from '../../../components/Header';
import SimpleLoader from '../../../components/Loaders/SimpleLoader';
import NotificationMenu from '../../../components/NotificationMenu';
import { Page } from '../../../components/Page';
import PageCard, { PageCardFooter, PageCardForm, PageCardHeader } from '../../../components/PageCard';
import ProfileMenu from '../../../components/ProfileMenu';
import useCustomToast from '../../../hooks/useCustomToast';
import Textarea from 'components/FormElements/Input/TextArea';
import cls from './Detail.module.scss';
import FormSelect from 'components/FormElements/Select/FormSelect';
import { useGetAllDepartmentList } from 'services/department.service';
import { useGetRoadmapByIdQuery, useRoadmapUpdateMutation } from 'services/roadmap.service';
import ReactFlow from 'reactflow';

const RoadmapDetail = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const { successToast } = useCustomToast();

	const { data } = useGetAllDepartmentList({
		params: {
			limit: 10,
			offset: 0,
		},
		tableSlug: '/departments',
	});

	const { control, reset, handleSubmit } = useForm({
		defaultValues: {},
	});

	const { isLoading } = useGetRoadmapByIdQuery({
		id: id,
		queryParams: {
			cacheTime: false,
			enabled: Boolean(id),
			onSuccess: reset,
		},
	});

	const { mutate: updateUser, isLoading: updateLoading } = useRoadmapUpdateMutation({
		onSuccess: () => {
			successToast();
			navigate(-1);
		},
	});

	const onSubmit = (values) => {
		const updateData = {
			title: values.title,
			description: values.description,
			department_id: values.department_id,
			actions: values.actions,
			short_link: values.short_link,
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
					<HeaderTitle>Roadmaps</HeaderTitle>
				</HeaderLeftSide>
				<HeaderExtraSide>
					<NotificationMenu />
					<ProfileMenu />
				</HeaderExtraSide>
			</Header>

			<Page p={4} h="100% !important">
				<PageCard w={600}>
					<PageCardHeader>
						<HeaderLeftSide>
							<Heading fontSize="xl">Все данные</Heading>
						</HeaderLeftSide>
					</PageCardHeader>

					<PageCardForm p={6} spacing={8}>
						<FormRow label="Заголовок:">
							<FormInput control={control} name="title" placeholder="Введите заголовок" autoFocus />
						</FormRow>
						<FormRow label="Отделение:">
							<FormSelect
								options={data?.departments?.map((el) => ({ label: el?.name, value: el?.id }))}
								control={control}
								name="department_id"
								placeholder="Введите отделение"
							/>
						</FormRow>
						<FormRow label="Описание:">
							<Textarea
								className={cls.textarea}
								control={control}
								name="description"
								placeholder="Введите oписание..."
							/>
						</FormRow>
						<FormRow label="short_link:">
							<FormInput control={control} name="short_link" placeholder="Введите short_link" autoFocus />
						</FormRow>
						<FormRow label="actions:">
							<FormInput control={control} name="actions" placeholder="Введите actions" autoFocus />
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
export default RoadmapDetail;

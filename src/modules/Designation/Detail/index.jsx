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
import { useUserCreateMutation, useUserGetByIdQuery, useUserUpdateMutation } from '../../../services/user.service';
import Textarea from 'components/FormElements/Input/TextArea';
import cls from './Detail.module.scss';
import { useDesignationUpdateMutation, useGetDesignationByIdQuery } from 'services/designation.service';

const DesignationDetail = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const { successToast } = useCustomToast();

	const { control, reset, handleSubmit } = useForm({
		defaultValues: {},
	});

	const { isLoading } = useGetDesignationByIdQuery({
		id: id,
		queryParams: {
			cacheTime: false,
			enabled: Boolean(id),
			onSuccess: reset,
		},
	});

	const { mutate: updateUser, isLoading: updateLoading } = useDesignationUpdateMutation({
		onSuccess: () => {
			successToast();
			navigate(-1);
		},
	});

	const onSubmit = (values) => {
		const updateData = {
			name: values.name,
			description: values.description,
			department_id: 'b3bd7bf7-467a-11ee-8f0d-02420a000031',
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
						<FormRow label="Название:">
							<FormInput control={control} name="name" placeholder="Введите название" autoFocus />
						</FormRow>
						<FormRow label="Описание:">
							<Textarea className={cls.textarea} control={control} name="description" placeholder="Описание..." />
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
export default DesignationDetail;

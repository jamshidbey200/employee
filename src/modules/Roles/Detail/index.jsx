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
import { useGetRoleByIdQuery, useRoleUpdateMutation } from 'services/roles.service';
import Textarea from 'components/FormElements/Input/TextArea';
import cls from './Detail.module.scss';

const RoleDetail = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const { successToast } = useCustomToast();

	const { control, reset, handleSubmit } = useForm({});

	const { isLoading } = useGetRoleByIdQuery({
		id: id,
		queryParams: {
			cacheTime: false,
			enabled: Boolean(id),
			onSuccess: reset,
		},
	});

	const { mutate: updateRole, isLoading: updateLoading } = useRoleUpdateMutation({
		onSuccess: () => {
			successToast();
			navigate(-1);
		},
	});

	const onSubmit = (values) => {
		const updateData = {
			name: values.name,
			description: values.description,
		};

		updateRole({
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
					<HeaderTitle>Роли</HeaderTitle>
				</HeaderLeftSide>
				<HeaderExtraSide></HeaderExtraSide>
			</Header>

			<Page p={4} h="calc(90vh - 56px)">
				<PageCard w={600}>
					<PageCardHeader>
						<HeaderLeftSide>
							<Heading fontSize="xl">Все данные</Heading>
						</HeaderLeftSide>
					</PageCardHeader>

					<PageCardForm p={6} spacing={8}>
						<FormRow label="Название:" required>
							<FormInput control={control} name="name" placeholder="Введите имя пользователя" autoFocus required />
						</FormRow>
						<FormRow label="Описание:" required>
							<Textarea
								className={cls.textarea}
								control={control}
								name="description"
								placeholder="Описание..."
								required
							/>
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
export default RoleDetail;

import { Box, Flex } from '@chakra-ui/react';
import Sidebar from '../../components/Sidebar';
import { FiUser } from 'react-icons/fi';
import { BiHomeSmile } from 'react-icons/bi';
import { Outlet } from 'react-router-dom';

const elements = [
	{
		label: 'Отделение',
		icon: BiHomeSmile,
		link: '/department',
	},
	{
		label: 'Пользователи',
		icon: FiUser,
		link: '/users',
	},
];

const MainLayout = () => {
	return (
		<Flex>
			<Sidebar elements={elements} />

			<Box flex={1} background="#f0f0f3">
				<Outlet />
			</Box>
		</Flex>
	);
};
export default MainLayout;

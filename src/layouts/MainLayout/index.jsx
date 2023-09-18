import { Box, Flex } from '@chakra-ui/react';
import Sidebar from '../../components/Sidebar';
import { FiUser } from 'react-icons/fi';
import { BiHomeSmile } from 'react-icons/bi';
import { MdDesignServices } from 'react-icons/md';
import { HiOutlineUsers } from 'react-icons/hi2';
import { Outlet } from 'react-router-dom';

const elements = [
	{
		label: 'Отделение',
		icon: BiHomeSmile,
		link: '/departments',
	},
	{
		label: 'Пользователи',
		icon: FiUser,
		link: '/users',
	},
	{
		label: 'Роли',
		icon: HiOutlineUsers,
		link: '/roles',
	},
	{
		label: 'Обозначение',
		icon: MdDesignServices,
		link: '/designations',
	},
];

const MainLayout = () => {
	return (
		<Flex>
			<Box position="sticky" top={0} height="100vh" overflowY="auto">
				<Sidebar elements={elements} />
			</Box>

			<Box background="#f0f0f3" flex={1} height="100vh" overflowY="auto">
				<Outlet />
			</Box>
		</Flex>
	);
};
export default MainLayout;

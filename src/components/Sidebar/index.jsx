import { Box, Icon, Text } from '@chakra-ui/react';
import styles from './index.module.scss';

import clsx from 'clsx';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiFillLeftCircle } from 'react-icons/ai';
import { useState } from 'react';
import authStore from 'store/auth.store';

const Sidebar = ({ elements }) => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const [isOpen, setIsOpen] = useState(true);

	const onRowClick = (element) => {
		navigate(element.link);
	};

	return (
		<Box className={styles.sidebar}>
			<Box className={styles.header}>
        Logo
				<Icon
					as={AiFillLeftCircle}
					boxSize="24px"
					color="primary.main"
					cursor="pointer"
					_hover={{ color: 'primary.500' }}
				/>
			</Box>

			<Box className={styles.body}>
				{elements?.map((element, index) => (
					<Box
						key={index}
						className={clsx(styles.row, {
							[styles.active]: pathname.startsWith(element.link),
						})}
						onClick={() => onRowClick(element)}
					>
						<Box className={styles.element}>
							<Icon as={element.icon} className={styles.icon} />
							<Text className={styles.label}>{element.label}</Text>
						</Box>
					</Box>
				))}
			</Box>

			<Box
				sx={{
					mt: '-42px',
					border: '1px solid #f4f6fa',
					textAlign: 'center',
					p: '8px 12px',
					cursor: 'pointer',
					fontWeight: 500,
					color: '#9aa6ac',
					fontSize: '16px',
				}}
				onClick={() => authStore.logout()}
			>
        Log Out
			</Box>
		</Box>
	);
};
export default Sidebar;

import { Box, Center } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import styles from './index.module.scss';
import LogoIcon from 'assets/icons/udevsLogo';

const AuthLayout = () => {
	return (
		<Box className={styles.layout}>
			<Center className={styles.logoSide}>
				<LogoIcon />
			</Center>
			<Box className={styles.formSide}>
				<Outlet />
			</Box>
		</Box>
	);
};

export default AuthLayout;

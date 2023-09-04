import styles from './index.module.scss';
import { Box, Heading } from '@chakra-ui/react';

export const Header = ({ title, children, ...props }) => {
	return (
		<Box className={styles.header} {...props}>
			<Heading fontSize="18px">{title}</Heading>
			{children}
		</Box>
	);
};

export const HeaderLeftSide = ({ children, ...props }) => {
	return (
		<Box className={styles.headerLeftSide} {...props}>
			{children}
		</Box>
	);
};

export const HeaderTitle = ({ children }) => {
	return <h3 className={styles.title}>{children}</h3>;
};

export const HeaderDivider = () => {
	return <div className={styles.border}></div>;
};

export const HeaderMiddleSide = ({ children, ...props }) => {
	return (
		<Box className={styles.headerMiddleSide} {...props}>
			{children}
		</Box>
	);
};

export const HeaderExtraSide = ({ children, ...props }) => {
	return (
		<Box className={styles.headerExtraSide} {...props}>
			{children}
		</Box>
	);
};

export default Header;

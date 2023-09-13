import { Box, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Header, { HeaderExtraSide, HeaderLeftSide, HeaderTitle } from '../../../components/Header';
import UTable from 'components/Table/Table';
import { HiMiniPlus } from 'react-icons/hi2';

const UsersList = () => {
	const navigate = useNavigate();

	return (
		<Box>
			<Header>
				<HeaderLeftSide ml={-10}>
					<HeaderTitle>Роли</HeaderTitle>
				</HeaderLeftSide>
				<HeaderExtraSide>
					<Button onClick={() => navigate('/roles/create')}>
						<HiMiniPlus size={17} />
            Create
					</Button>
				</HeaderExtraSide>
			</Header>

			<UTable />
		</Box>
	);
};
export default UsersList;

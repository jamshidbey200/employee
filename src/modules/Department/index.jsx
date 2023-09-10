import { Button } from '@chakra-ui/react';
import Header from 'components/Header';
import UTable from 'components/Table/Table';
import { HiMiniPlus } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

const Department = () => {
	const navigate = useNavigate();

	return (
		<>
			<Header title="Отделение">
				<Button onClick={() => navigate('/departments/create')}>
					<HiMiniPlus size={17} />
          Create
				</Button>
			</Header>
			<UTable />
		</>
	);
};
export default Department;

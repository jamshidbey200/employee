import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Header, { HeaderExtraSide, HeaderLeftSide, HeaderTitle } from '../../../components/Header';
import UTable from 'components/Table/Table';
import { HiMiniPlus } from 'react-icons/hi2';

const Roadmaps = () => {
	const navigate = useNavigate();

	return (
		<>
			<Header>
				<HeaderLeftSide ml={-10}>
					<HeaderTitle>Roadmap</HeaderTitle>
				</HeaderLeftSide>
				<HeaderExtraSide>
					<Button onClick={() => navigate('/roadmap/create')}>
						<HiMiniPlus size={17} />
            Create
					</Button>
				</HeaderExtraSide>
			</Header>

			<UTable />
		</>
	);
};
export default Roadmaps;

import {
	Box,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger,
	Portal,
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import cls from './Table.module.scss';
import {
	MdDeleteOutline,
	MdMoreHoriz,
	MdOutlineModeEdit,
	MdTableChart,
} from 'react-icons/md';

import { useNavigate } from 'react-router-dom';
import Pagination from 'components/Pagination/Pagination';

const tableHead = ['Name', 'Description'];
const tableBody = [
	{
		name: 'Ali',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'Vali',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'Sardor',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'Begzod',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'Saida',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'Mavluda',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'Nozima',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'Dilshod',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'Shuhrat',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'Hamdam',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'Alisher',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'Nodir',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'Doniyor',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'Hikmat',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'Surat',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'Aslbek',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'Begzod',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'Sardor',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'Shahzod',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'Ziyod',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'Xursand',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'Rahmat',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'Eshon',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'Dilshod',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'davron',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'salim',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
];

export default function UTable() {
	const [itemLimit, setItemLimit] = useState(10);
	const pagesQuantity = Math.ceil(tableBody.length / itemLimit);
	const [curPage, setCurPage] = useState(1);
	const [curItems, setCurItems] = useState([]);
	const navigate = useNavigate();

	const handlePageChange = (page) => {
		setCurPage(page);
	};

	useEffect(() => {
		const offset = (curPage - 1) * itemLimit;
		const getList = (curPage, itemLimit) => {
			setCurItems(tableBody.slice(offset, offset + itemLimit));
		};

		getList(curPage, itemLimit);
	}, [curPage, itemLimit]);

	return (
		<div className={cls.table}>
			<TableContainer sx={{ border: '1px solid #F4F6FA', margin: '16px' }}>
				<Box overflowY="auto" maxHeight="77vh">
					<Table variant="striped" colorScheme="gray">
						<Thead position="sticky" top={-1} bgColor={'white'}>
							<Tr>
								<Th className={cls.numbers}>№</Th>
								{tableHead?.map((el, index) => (
									<Th key={index} className={cls.table__header}>
										{el}
									</Th>
								))}

								<Th
									sx={{
										border: '1px solid #F4F6FA',
										display: 'flex',
										justifyContent: 'center',
									}}
								>
									<MdTableChart size={27} color="#0e73f0" />
								</Th>
							</Tr>
						</Thead>
						<Tbody className={cls.tBody} style={{ border: '1px solid blue' }}>
							{curItems?.map((el, index) => (
								<Tr key={index} className={cls.body__table}>
									<Td>{curPage * 10 - 10 + index + 1}</Td>
									<Td onClick={() => navigate('/department/create')}>
										{el?.name}
									</Td>
									<Td onClick={() => navigate('/department/create')}>
										{el?.description}
									</Td>
									<Td className={cls.actions}>
										<Popover>
											<PopoverTrigger>
												<button>
													<div className={cls.action__icon}>
														<MdMoreHoriz size={28} color="#0e73f0" />
													</div>
												</button>
											</PopoverTrigger>
											<PopoverContent>
												<PopoverArrow />
												<PopoverHeader
													onClick={() => navigate('/department/create')}
													sx={{
														display: 'flex',
														alignItems: 'center',
														gap: '12px',
														fontSize: '14px',
														lineHeight: '24px',
														letterSpacing: '0.084px',
														cursor: 'pointer',
													}}
												>
													<Box
														sx={{
															backgroundColor: '#e3effe',
															padding: '8px',
															borderRadius: '6px',
														}}
													>
														<MdOutlineModeEdit color="#4094f7" />
													</Box>
                          Изменить
												</PopoverHeader>
												<PopoverBody
													sx={{
														display: 'flex',
														alignItems: 'center',
														gap: '12px',
														fontSize: '14px',
														lineHeight: '24px',
														letterSpacing: '0.084px',
														cursor: 'pointer',
													}}
												>
													{' '}
													<Box
														sx={{
															backgroundColor: '#fee8e6',
															padding: '8px',
															borderRadius: '6px',
														}}
													>
														<MdDeleteOutline size={19} color="#f76659" />
													</Box>
                          Удалить
												</PopoverBody>
											</PopoverContent>
										</Popover>
									</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
				</Box>
			</TableContainer>
			<Pagination
				handlePageChange={handlePageChange}
				pagesQuantity={pagesQuantity}
				setItemLimit={setItemLimit}
				tableBody={tableBody}
				curPage={curPage}
			/>
		</div>
	);
}

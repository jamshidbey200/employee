import {
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import cls from './UserTable.module.scss';
import { MdMoreHoriz, MdTableChart } from 'react-icons/md';
import { Select } from '@chakra-ui/react';
import {
	Previous,
	Paginator,
	PageGroup,
	Next,
	Container,
} from 'chakra-paginator';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';

const tableHead = ['Name', 'Description'];
const tableBody = [
	{
		name: 'Ali',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'cvfdgb',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'vdgbf',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'vdfgbh',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'vfgbh',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'csdfvg',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'c dvf',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'cdvf',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'cdvf',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'cvdf',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'cdvfg',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'vdxf',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'dvsfg',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'vdsfg',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'vdfs',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'vdfs',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'dvfv',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'sardor',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'shahzod',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'ziyod',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'xursand',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'rahmat',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'eshon',
		description:
      'lorem is not just a normal snippet—it\'s actually a generator. Every time you expand it, it will generate a 30-words dummy text',
	},
	{
		name: 'dilshod',
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
export default function UserTable() {
	const [itemLimit, setItemLimit] = useState(10);
	const pagesQuantity = Math.ceil(tableBody.length / itemLimit);
	const [curPage, setCurPage] = useState(1);
	const [curItems, setCurItems] = useState([]);

	const baseStyles = {
		w: 25,
	};

	const normalStyles = {
		...baseStyles,
	};

	const activeStyles = {
		...baseStyles,
		bg: '#0e73f0',
		color: 'white',
		borderRadius: '6px',
	};

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

	const numbers = [10, 20, 30, 40, 50];

	return (
		<div className={cls.table}>
			<TableContainer sx={{ border: '1px solid #F4F6FA', margin: '16px' }}>
				<Table variant="striped" colorScheme="gray">
					<Thead>
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
					<Tbody>
						{curItems?.map((el, index) => (
							<Tr key={index} className={cls.body__table}>
								<Td>{curPage * 10 - 10 + index + 1}</Td>
								<Td>{el?.name}</Td>
								<Td>{el?.description}</Td>
								<Td>
									<div className={cls.action__icon}>
										<MdMoreHoriz size={25} color="#0e73f0" />
									</div>
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
			<Paginator
				onPageChange={handlePageChange}
				pagesQuantity={pagesQuantity}
				normalStyles={normalStyles}
				activeStyles={activeStyles}
			>
				<div className={cls.pagination__wrap}>
					<Container justify="left" pl={17}>
						<Select
							w={140}
							value={itemLimit}
							onChange={(e) => {
								setItemLimit(Number(e.target.value));
							}}
						>
							{numbers.map((itemLimit) => (
								<option key={itemLimit} value={itemLimit}>
                  Показать по {itemLimit}
								</option>
							))}
						</Select>
					</Container>
					<Container justify="right" pr={7}>
						<Previous m={6}>
							<CgChevronLeft size={20} />
						</Previous>
						<div className={cls.pagination}>
							<PageGroup isInline align="center" />
							<div style={{ marginRight: '10px' }}>...</div>
							<div>{Math.floor(tableBody?.length)}</div>
						</div>
						<Next m={6}>
							<CgChevronRight size={20} />
						</Next>
					</Container>
				</div>
			</Paginator>
		</div>
	);
}

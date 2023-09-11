// import { Button, Popover, PopoverBody, PopoverContent, PopoverTrigger, Portal } from '@chakra-ui/react';
// import React from 'react';
// import cls from './index.module.scss';
// import { Previous, Paginator, PageGroup, Next, Container } from 'chakra-paginator';
// import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';
// import { BiFileBlank } from 'react-icons/bi';

// function Pagination({ handlePageChange, pagesQuantity, setItemLimit, itemLimit, tableBody, curPage }) {
// 	const initRef = React.useRef();
// 	const baseStyles = {
// 		p: '4px 8px',
// 	};

// 	const normalStyles = {
// 		...baseStyles,
// 	};

// 	const activeStyles = {
// 		...baseStyles,
// 		bg: '#0e73f0',
// 		color: 'white',
// 		borderRadius: '6px',
// 		width: '25px',
// 	};

// 	const numbers = [10, 20, 30, 40, 50];

// 	return (
// 		<>
// 			<Paginator
// 				onPageChange={handlePageChange}
// 				pagesQuantity={pagesQuantity}
// 				normalStyles={normalStyles}
// 				activeStyles={activeStyles}
// 			>
// 				<div className={cls.pagination__wrap}>
// 					<Container justify="left" pl={17}>
// 						<Popover closeOnBlur={true} placement="bottom" initialFocusRef={initRef}>
// 							{({ isOpen, onClose }) => (
// 								<>
// 									<PopoverTrigger>
// 										<Button
// 											colorScheme="white"
// 											sx={{
// 												border: '1px solid #E5E9EB',
// 												padding: '10px 16px 10px 10px',
// 												gap: '12px',
// 												color: '#303940',
// 												fontWeight: 500,
// 												fontSize: '14px',
// 											}}
// 											value={itemLimit}
// 											onChange={(e) => {
// 												setItemLimit(Number(e.target.value));
// 											}}
// 										>
// 											<BiFileBlank size={20} color="rgb(14, 115, 240)" />
//                       Показать по {itemLimit}
// 										</Button>
// 									</PopoverTrigger>
// 									<Portal>
// 										<PopoverContent sx={{ width: '157px !important', textAlign: 'center' }}>
// 											<PopoverBody sx={{ cursor: 'pointer' }}>
// 												{numbers.map((itemLimits) => (
// 													<option
// 														key={itemLimits}
// 														value={itemLimit}
// 														onClick={() => {
// 															setItemLimit(itemLimits), onClose();
// 														}}
// 														style={{
// 															fontSize: '14px',
// 															lineHeight: '26px',
// 															letterSpacing: '0.5px',
// 															textAlign: 'left',
// 														}}
// 													>
//                             Показать по {itemLimits}
// 													</option>
// 												))}
// 											</PopoverBody>
// 										</PopoverContent>
// 									</Portal>
// 								</>
// 							)}
// 						</Popover>
// 					</Container>
// 					<Container justify="right" pr={7}>
// 						<Previous m={6}>
// 							<CgChevronLeft size={20} className={curPage === 1 ? '#252c32' : cls.cgIcon} />
// 						</Previous>
// 						<div className={cls.pagination}>
// 							<div>
// 								<PageGroup isInline align="center" />
// 							</div>
// 							<div style={{ margin: '0 10px 0 10px' }}>...</div>
// 							<div>{Math.floor(tableBody?.length)}</div>
// 						</div>
// 						<Next m={6}>
// 							<CgChevronRight
// 								size={20}
// 								className={Math.ceil(tableBody?.length / itemLimit) === curPage ? '#252c32' : cls.cgIcon}
// 							/>
// 						</Next>
// 					</Container>
// 				</div>
// 			</Paginator>
// 		</>
// 	);
// }

// export default Pagination;

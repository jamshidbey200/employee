import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import UpdateBar from './UpdateBar';

function ModalSidebar({ isOpen, onClose, currentItem, changePosition, setChangePosition }) {
	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent
					height="100%"
					margin="0"
					maxW="40%"
					sx={{}}
					containerProps={{ display: 'flex', justifyContent: 'flex-end' }}
				>
					<ModalCloseButton />
					<ModalBody>
						<UpdateBar
							currentItem={currentItem}
							changePosition={changePosition}
							setChangePosition={setChangePosition}
						/>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}

export default ModalSidebar;

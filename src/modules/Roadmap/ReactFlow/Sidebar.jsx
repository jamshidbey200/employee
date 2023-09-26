import { position } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';

// eslint-disable-next-line react/display-name
export default ({ setPositionDots, positionDots }) => {
	const onDragStart = (event, nodeType) => {
		event.dataTransfer.setData('application/reactflow', nodeType);
		event.dataTransfer.effectAllowed = 'move';
	};

	return (
		<aside>
			<div className="dndnode main" onDragStart={(event) => onDragStart(event, 'default')} draggable>
        Main
			</div>
			<div className="dndnode input" onDragStart={(event) => onDragStart(event, 'output')} draggable>
        Input
			</div>
			{/* <div className='dotsWrap'>
				<div className='title'>Position dots</div>
				<div className='dots'>
					<div 
						className='dot' 
						style={{background: positionDots.includes('top') ? '#999a9c' : ''}} 
						onClick={() => setPositionDots( prev=> [...prev,'top'])}
					>
						top
					</div>
					<div 
						className='dot'
					 style={{background: positionDots.includes('right') ? '#999a9c' : ''}} 
					 onClick={() => setPositionDots( prev=> [...prev, 'right'])}
					 >
						right
					</div>
					<div
					 className='dot' 
					 style={{background: positionDots.includes('bottom') ? '#999a9c' : ''}} 
					 onClick={() => setPositionDots (prev=> [...prev,'bottom'])}
					 >
						bottom
					</div>
					<div 
						className='dot' 
						style={{background: positionDots.includes('left') ? '#999a9c' : ''}} 
						onClick={() => setPositionDots( prev=> [...prev, 'left'])}
					>
						left
					</div>
				</div>
			</div> */}
		</aside>
	);
};

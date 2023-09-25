import React from 'react';

// eslint-disable-next-line react/display-name
export default () => {
	const onDragStart = (event, nodeType) => {
		event.dataTransfer.setData('application/reactflow', nodeType);
		event.dataTransfer.effectAllowed = 'move';
	};

	return (
		<aside>
			<div className="dndnode main" onDragStart={(event) => onDragStart(event, 'default')} draggable>
        Main
			</div>
			<div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
        Input
			</div>
		</aside>
	);
};

import cls from './style.module.scss';

// eslint-disable-next-line react/display-name
export default () => {
	const onDragStart = (event, nodeType) => {
		event.dataTransfer.setData('application/reactflow', nodeType);
		event.dataTransfer.effectAllowed = 'move';
	};

	return (
		<aside>
			<div className={cls.main} onDragStart={(event) => onDragStart(event, 'default')} draggable>
        Main
			</div>
			<div className={cls.second} onDragStart={(event) => onDragStart(event, 'output')} draggable>
        Input
			</div>
		</aside>
	);
};

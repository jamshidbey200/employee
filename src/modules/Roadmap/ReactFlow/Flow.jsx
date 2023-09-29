import React, { useState, useRef, useCallback } from 'react';
import ReactFlow, { ReactFlowProvider, addEdge, useNodesState, useEdgesState, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import Sidebar from './Sidebar';
import './index.css';
import ModalSidebar from './Modal';
import { useDisclosure } from '@chakra-ui/react';
import cls from './style.module.scss';

const cloneInputType = ({ params }) => {
	const source = params.source.split('_')?.[0];
	const target = params.target.split('_')?.[0];
	const lineType = source == target;
	return {
		...params,
		animated: !lineType,
		style: { stroke: '#2b77e4', strokeWidth: 2 },
		type: lineType ? 'step' : 'BezierEdge',
	};
};

const initialNodes = [
	{
		id: 'default',
		type: 'input',
		data: { label: <input className={cls.inputFlow} placeholder="main placeholder" /> },
		position: { x: 250, y: 5 },
		style: { padding: 0, width: 'max-content', background: '#ffff00' },
		sourcePosition: 'right',
	},
];

let id = 0;
const getId = ({ type }) => `${type}_${id++}`;

const Flow = () => {
	const reactFlowWrapper = useRef(null);
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState([]);
	const [reactFlowInstance, setReactFlowInstance] = useState(null);
	const [menu, setMenu] = useState(null);
	const [currentItem, setCurrentItem] = useState();
	const [changePosition, setChangePosition] = useState();

	const { isOpen, onOpen, onClose } = useDisclosure();

	const onConnect = useCallback((params) => setEdges((eds) => addEdge(cloneInputType({ params }), eds)), []);

	const onDragOver = useCallback((event) => {
		event.preventDefault();
		event.dataTransfer.dropEffect = 'move';
	}, []);

	function changePos(passedItem) {
		const selectedItemIdx = nodes.findIndex((item) => {
			return item.id === passedItem.id;
		});

		const copyNodes = [...nodes];

		if (copyNodes?.[selectedItemIdx]) {
			copyNodes[selectedItemIdx].sourcePosition = 'bottom';
			copyNodes[selectedItemIdx].targetPosition = 'top';
		}

		setNodes(copyNodes);
	}

	const onDrop = useCallback(
		(event) => {
			event.preventDefault();

			const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
			const type = event.dataTransfer.getData('application/reactflow');
			const colorTypes = {
				default: '#ffff00',
				output: '#ffe599',
			};
			// check if the dropped element is valid
			if (typeof type === 'undefined' || !type) {
				return;
			}

			const position = reactFlowInstance.project({
				x: event.clientX - reactFlowBounds.left,
				y: event.clientY - reactFlowBounds.top,
			});

			//input background color
			const backgroundColor = colorTypes[type];

			const newNode = {
				id: getId({ type }),
				type,
				position,
				data: { label: <input type={type} className={cls.inputFlow} placeholder="Type something" /> },
				style: { padding: 0, width: 'max-content', backgroundColor },
				sourcePosition: 'right',
				targetPosition: 'left',
			};

			setNodes((nds) => nds.concat(newNode));
		},
		[reactFlowInstance],
	);

	const onPaneClick = useCallback(() => setMenu(null), [setMenu]);

	const getCurrentItem = (event, element) => {
		setCurrentItem(element);
	};

	const deletedItem = (id) => {
		console.log('id', id);
		const deletedElement = nodes?.filter((el) => el.id !== id);
		setNodes(deletedElement);
	};

	return (
		<div className={cls.dndflow}>
			<ReactFlowProvider>
				<div className={cls.dndflow} ref={reactFlowWrapper}>
					<ReactFlow
						nodes={nodes}
						edges={edges}
						onNodesChange={onNodesChange}
						onEdgesChange={onEdgesChange}
						onConnect={onConnect}
						onInit={setReactFlowInstance}
						onDrop={(e) => onDrop(e)}
						onDragOver={onDragOver}
						onPaneClick={onPaneClick}
						fitView
						onNodeDoubleClick={onOpen}
						onNodeClick={getCurrentItem}
						onNodesDelete={deletedItem}
					>
						<Background variant="dots" gap={12} size={1} />
					</ReactFlow>
					<ModalSidebar
						currentItem={currentItem}
						changePosition={changePosition}
						setChangePosition={changePos}
						isOpen={isOpen}
						onOpen={onOpen}
						onClose={onClose}
					/>
				</div>
				<div className={cls.sidebar}>
					<Sidebar />
				</div>
			</ReactFlowProvider>
		</div>
	);
};

export default Flow;

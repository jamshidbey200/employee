import React, { useState, useRef, useCallback } from 'react';
import ReactFlow, {
	ReactFlowProvider,
	addEdge,
	useNodesState,
	useEdgesState,
	Background,
	Position,
	Handle,
} from 'reactflow';
import 'reactflow/dist/style.css';
import Sidebar from './Sidebar';
import './index.css';

const initialNodes = [
	{
		id: '3',
		type: 'default',
		data: { label: <input className="input-flow" placeholder="main placeholder" /> },
		position: { x: 250, y: 5 },
		style: { padding: 0, width: 'max-content', background: '#ffff00' },
		sourcePosition: 'left',
		targetPosition: 'right',
	},
];

let id = 0;
const getId = () => `dndnode_${id++}`;

const Flow = () => {
	const reactFlowWrapper = useRef(null);
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState([]);
	const [reactFlowInstance, setReactFlowInstance] = useState(null);

	const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

	const onDragOver = useCallback((event) => {
		event.preventDefault();
		event.dataTransfer.dropEffect = 'move';
	}, []);

	const onDrop = useCallback(
		(event) => {
			event.preventDefault();

			const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
			const type = event.dataTransfer.getData('application/reactflow');
			const colorTypes = {
				default: '#ffff00',
				input: '#ffe599',
				output: 'blue',
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
				id: getId(),
				type,
				position,
				data: { label: <input type={type} className="input-flow" placeholder="Type something" /> },
				style: { padding: 0, width: 'max-content', backgroundColor },
				sourcePosition: 'top',
				targetPosition: 'bottom',
				animated: true,
			};

			setNodes((nds) => nds.concat(newNode));
		},
		[reactFlowInstance],
	);

	return (
		<div className="dndflow">
			<ReactFlowProvider>
				<div className="reactflow-wrapper" ref={reactFlowWrapper}>
					<ReactFlow
						nodes={nodes}
						edges={edges}
						onNodesChange={onNodesChange}
						onEdgesChange={onEdgesChange}
						onConnect={onConnect}
						onInit={setReactFlowInstance}
						onDrop={onDrop}
						onDragOver={onDragOver}
						fitView
					>
						<Background variant="dots" gap={12} size={1} />
					</ReactFlow>
				</div>
				<div className="sidebar">
					<Sidebar />
				</div>
			</ReactFlowProvider>
		</div>
	);
};

export default Flow;

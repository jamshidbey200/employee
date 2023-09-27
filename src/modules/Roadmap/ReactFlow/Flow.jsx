import React, { useState, useRef, useCallback } from 'react';
import ReactFlow, { ReactFlowProvider, addEdge, useNodesState, useEdgesState, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import Sidebar from './Sidebar';
import './index.css';
import UpdateBar from './UpdateBar';

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
		type: 'default',
		data: { label: <input className="input-flow" placeholder="main placeholder" /> },
		position: { x: 250, y: 5 },
		style: { padding: 0, width: 'max-content', background: '#ffff00' },
		sourcePosition: 'right',
		targetPosition: 'left',
	},
];

let id = 0;
const getId = ({ type }) => `${type}_${id++}`;

const Flow = () => {
	const reactFlowWrapper = useRef(null);
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState([]);
	const [reactFlowInstance, setReactFlowInstance] = useState(null);
	const [positionDots, setPositionDots] = useState([]);

	const onConnect = useCallback((params) => setEdges((eds) => addEdge(cloneInputType({ params }), eds)), []);

	const onDragOver = useCallback((event) => {
		event.preventDefault();
		event.dataTransfer.dropEffect = 'move';
	}, []);

	const onDrop = useCallback(
		(event, positionDots) => {
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
				data: { label: <input type={type} className="input-flow" placeholder="Type something" /> },
				style: { padding: 0, width: 'max-content', backgroundColor },
				sourcePosition: 'right',
				targetPosition: 'left',
			};

			setNodes((nds) => nds.concat(newNode));
		},
		[reactFlowInstance],
	);

	const onSelectionChange = (elem) => {
		// console.log('Selected Elements:', elements);
	};

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
						onDrop={(e) => onDrop(e, positionDots)}
						onDragOver={onDragOver}
						k={onSelectionChange}
						fitView
					>
						<Background variant="dots" gap={12} size={1} />
						<UpdateBar />
					</ReactFlow>
				</div>
				<div className="sidebar">
					<Sidebar setPositionDots={setPositionDots} positionDots={positionDots} />
				</div>
			</ReactFlowProvider>
		</div>
	);
};

export default Flow;

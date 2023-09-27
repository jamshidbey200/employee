import { useState } from 'react';
import { Handle, Position, useUpdateNodeInternals } from 'reactflow';

const MyHandle = ({ position, isConnectable }) => {
	return <Handle position={position.position} type="target" isConnectable={isConnectable} id={'lasdff'} />;
};

const DynOutputHandle = (props) => {
	const { idx } = props;

	return <Handle type={'target'} id={`output${idx}`} position={Position.Bottom} style={{ left: 10 + idx * 20 }} />;
};
export const FlowCard = ({ data, isConnectable }) => {
	const [outputcount, setOutputCount] = useState(2);
	const updateNodeInternals = useUpdateNodeInternals();

	const [handlePositions, setHandlePositions] = useState([]);

	const handleSetPositons = (positionType) => {
		const currentPosition = handlePositions.find((pos) => pos.value === positionType.value);
		if (currentPosition) {
			setHandlePositions((prev) => prev.filter((item) => item.value !== positionType.value));
		} else {
			setHandlePositions((prev) => [...prev, positionType]);
		}
	};

	console.log(data);

	return (
		<div>
			<div>
				{Array(outputcount)
					.fill(null)
					.map((_, i) => (
						<DynOutputHandle key={i} idx={i} />
					))}
				{data.label}
				<Handle type="source" id="lasfldkn" position="right" />
				<div className="dotsWrap">
					<div className="title">Position dots</div>
					<div className="dots">
						<div
							className="dot"
							// onClick={() => handleSetPositons({ position: 'top', type: 'source', value: 'topSource' })}
							onClick={() => setOutputCount((i) => i + 1)}
						>
              top
						</div>
						<div className="dot" onClick={() => handleSetPositons('right', 'source')}>
              right
						</div>
						<div className="dot" onClick={() => handleSetPositons('bottom', 'source')}>
              bottom
						</div>
						<div className="dot" onClick={() => handleSetPositons('left', 'source')}>
              left
						</div>
					</div>
					<div className="dots">
						<div
							className="dot"
							onClick={() => handleSetPositons({ position: 'top', type: 'source', value: 'topTarget' })}
						>
              top
						</div>
						<div className="dot" onClick={() => handleSetPositons('right', 'target')}>
              right
						</div>
						<div className="dot" onClick={() => handleSetPositons('bottom', 'target')}>
              bottom
						</div>
						<div className="dot" onClick={() => handleSetPositons('left', 'target')}>
              left
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

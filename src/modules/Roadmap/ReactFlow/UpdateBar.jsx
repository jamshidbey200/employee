import React from 'react';

function UpdateBar({ nodeName, setNodeName }) {
	return (
		<div className="updatenode__controls">
			<label className="title">Title:</label>
			<input className="textarea" value={nodeName} onChange={(evt) => setNodeName(evt.target.value)} />

			<div className="updatenode__checkboxwrapper">
				<p className="title">Positions:</p>
				<div className="positions">
					<div className="position">
						<div className="item">Vertical</div>
						<div className="item">Horizontal</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UpdateBar;

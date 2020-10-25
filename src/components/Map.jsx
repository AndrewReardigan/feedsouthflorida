import React, { useState, useEffect } from 'react';

import ReactMapGL, { Marker } from 'react-map-gl';

const Map = () => {
	const [ viewport, setViewport ] = useState({
		latitude: 26.7056,
		longitude: -80.0364,
		width: '100vw',
		height: '100vh',
		zoom: 10
	});

	return (
		<div>
			<ReactMapGL
				mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
				{...viewport}
				onViewportChange={(viewport) => {
					setViewport(viewport);
				}}
			>
				<div>
					<h1>Drop Off Locations:</h1>
				</div>
			</ReactMapGL>
		</div>
	);
};
export default Map;

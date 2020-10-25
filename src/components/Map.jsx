import React, { useState, useEffect } from 'react';

import ReactMapGL, { Marker } from 'react-map-gl';

const Map = () => {
	const [ viewport, setViewport ] = useState({
		latitude: 39.8283,
		longitude: -98.5795,
		width: '100vw',
		height: '100vh',
		zoom: 4
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
				<Marker key={1} latitude={35.611763} longitude={-83.489548} />

				<div>
					<h1>Drop Off</h1>
				</div>
			</ReactMapGL>
		</div>
	);
};
export default Map;

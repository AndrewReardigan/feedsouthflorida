import React, { useState } from 'react';
import BarcodeScannerComponent from 'react-webcam-barcode-scanner';
import CheckTheProduct from './CheckTheProduct';
import '../App.css';

const BarcodeScanner = () => {
	const [ data, setData ] = useState(null);

	const [ found, setFound ] = useState(false);

	const itemData = () => {};

	return (
		<div>
			<div className="scan-header">DONATE</div>
			<BarcodeScannerComponent
				className="scanner"
				width="100%"
				height="100%"
				onUpdate={(err, result) => {
					if (!found && result) {
						setData(result.text);
						setFound(true);
						console.log(found);
					}
					// else setData('Not Found')
				}}
			/>
			{/* <p>{data}</p>
            <p>{console.log(data)}</p> */}
			{/* <CheckTheProduct barCode={data} /> */}

			<div
				style={{
					marginTop: '-50px',
					zIndex: 99999999,
					width: '80%',
					height: '200px',
					backgroundColor: 'white',
					display: 'inline-block'
				}}
			/>
		</div>
	);
};

export default BarcodeScanner;

import React, { useState } from 'react';
import BarcodeScannerComponent from 'react-webcam-barcode-scanner';
import CheckTheProduct from './CheckTheProduct';
import '../App.css';

const BarcodeScanner = () => {
	const [ data, setData ] = useState(null);
	const [ count, setCount ] = useState(0);

	const [ found, setFound ] = useState(false);

	const incrementer = () => {
		setCount(count + 1);
	};
	const decreaseNumber = () => {
		setCount(count - 1);
	};

	return (
		<div className="container">
			<div className="scan-header">DONATE</div>
			<div>
				<BarcodeScannerComponent
					className="scanner"
					// width="100%"
					height="100%"
					width="100%"
					onUpdate={(err, result) => {
						if (!found && result) {
							setData(result.text);
							setFound(true);
							console.log(found);
						}
						// else setData('Not Found')
					}}
				/>
			</div>
			{/* <p>{data}</p>
            <p>{console.log(data)}</p> */}
			{/* <CheckTheProduct barCode={data} /> */}
			<div
				style={{
					marginTop: '-200px',
					zIndex: '99999999',
					marginLeft: 'auto',
					marginRight: 'auto',
					height: '200px',
					position: 'absolute',
					width: '100%'
				}}
			>
				<div
					className="bottom-component"
					style={{
						width: '800px',
						marginLeft: 'auto',
						marginRight: 'auto',
						height: '200px',
						backgroundColor: 'white',
						borderTopLeftRadius: '20px',
						borderTopRightRadius: '20px',
						alignItems: 'center'
					}}
				>
					<input className="input" placeholder="Item Name" />
					<input className="input" placeholder="Weight" />
					<div className="increment">
						<h3>Quantity</h3>
						<button id="special-button" onClick={incrementer}>
							+
						</button>
						<h3>{count}</h3>
						<button id="special-button" onClick={decreaseNumber}>
							-
						</button>
					</div>
					<button
						onClick={(e) => {
							console.log(e.target.value);
						}}
					>
						ADD
					</button>
				</div>
			</div>
		</div>
	);
};

export default BarcodeScanner;

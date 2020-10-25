import React, { useState, useEffect } from 'react';
// import BarcodeScannerComponent from 'react-webcam-barcode-scanner';
// import BarcodeReader from 'react-barcode-reader';
// import CheckTheProduct from './CheckTheProduct';
import Dynamsoft from './Dynamsoft';
import axios from 'axios';
import '../App.css';
import './barcodescanner.css';

const BarcodeScanner = () => {
	const [ count, setCount ] = useState(0);
	const [ weight, setWeight ] = useState('');
	const [ name, setName ] = useState('');
	const [ bDestroyed, setbDestroyed ] = useState(false);
	const [ scanner, setScanner ] = useState(null);
	const elRef = React.createRef();
	const [ scanReceived, setScanReceived ] = useState(false);
	const [ scanData, setScanData ] = useState('');

	const getUpcData = async (upc) => {
		// const callOptions = {
		// 	method: 'GET',
		// 	mode: 'no-cors',
		// 	headers: {
		// 		'Access-Control-Allow-Origin': '*',
		// 		'Content-Type': 'application/json'
		// 	},
		// 	credentials: 'same-origin'
		// };
		const apiCall = await axios({
			method: 'post',
			url: 'https://us-central1-feedingsouthflorida.cloudfunctions.net/getupc',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		alert(apiCall);
		alert(JSON.stringify(apiCall));
		// setName(apiCall.data.items[0].title);
		// setWeight(apiCall.data.items[0].weight);
	};

	const incrementer = () => {
		setCount(count + 1);
	};
	const decreaseNumber = () => {
		setCount(count - 1);
	};
	const handleScan = (data) => {
		console.log(data);
	};
	const handleError = (data) => {
		console.log(data);
	};

	const createScanner = async () => {
		const scannerInstance = await Dynamsoft.BarcodeScanner.createInstance();
		setScanner(scannerInstance);
	};

	useEffect(() => {
		createScanner();
	}, []);

	const initializeScanner = async () => {
		await scanner.open();
		scanner.onFrameRead = (results) => {
			if (results.length) {
				setScanData(results[0].barcodeText);
				setScanReceived(true);
			}
		};

		scanner.onUnduplicatedRead = (txt, result) => {
			console.log('NOTHING');
		};
	};

	useEffect(
		() => {
			if (scanner !== null) initializeScanner();
		},
		[ scanner ]
	);

	useEffect(
		() => {
			if (scanReceived) {
				getUpcData(scanData);
			}
		},
		[ scanReceived ]
	);

	return (
		<div className="container">
			<div className="scan-header" style={{ position: 'absolute', top: '0px', zIndex: 9999 }}>
				DONATE
			</div>
			<div style={{ width: '100%', overflow: 'hidden' }}>
				<div ref={elRef} className="component-barcode-scanner">
					<svg className="dbrScanner-bg-loading" viewBox="0 0 1792 1792">
						<path d="M1760 896q0 176-68.5 336t-184 275.5-275.5 184-336 68.5-336-68.5-275.5-184-184-275.5-68.5-336q0-213 97-398.5t265-305.5 374-151v228q-221 45-366.5 221t-145.5 406q0 130 51 248.5t136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5q0-230-145.5-406t-366.5-221v-228q206 31 374 151t265 305.5 97 398.5z" />
					</svg>
					<svg className="dbrScanner-bg-camera" style={{ display: 'none' }} viewBox="0 0 2048 1792">
						<path d="M1024 672q119 0 203.5 84.5t84.5 203.5-84.5 203.5-203.5 84.5-203.5-84.5-84.5-203.5 84.5-203.5 203.5-84.5zm704-416q106 0 181 75t75 181v896q0 106-75 181t-181 75h-1408q-106 0-181-75t-75-181v-896q0-106 75-181t181-75h224l51-136q19-49 69.5-84.5t103.5-35.5h512q53 0 103.5 35.5t69.5 84.5l51 136h224zm-704 1152q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5z" />
					</svg>
					<video className="dbrScanner-video" playsInline={true} />
					<canvas className="dbrScanner-cvs-drawarea" />
					<div className="dbrScanner-cvs-scanarea">
						<div className="dbrScanner-scanlight" style={{ display: 'none' }} />
					</div>
					<select className="dbrScanner-sel-camera" />
					<select className="dbrScanner-sel-resolution" />
				</div>
				{/* <BarcodeReader style={{ width: '200px', height: '200px' }} onError={handleError} onScan={handleScan} /> */}
				{/* <BarcodeScannerComponent
					width={500}
					height={500}
					onUpdate={(err, result) => {
						if (result && name !== '') alert(result.text);
						else setData('Not Found');
					}}
				/> */}
			</div>
			{/* <p>{data}</p>
            <p>{console.log(data)}</p> */}
			{/* <CheckTheProduct barCode={data} /> */}
			<div
				style={{
					bottom: '0px',
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
					<input className="input" value={name} placeholder="Item Name" />
					<input className="input" value={weight} placeholder="Weight" />
					<div className="increment">
						<h3>Quantity</h3>
						<button className="special-button" onClick={() => getUpcData('1234')}>
							+
						</button>
						<h3>{count}</h3>
						<button className="special-button" onClick={decreaseNumber}>
							-
						</button>
					</div>
					<button className="special-button">ADD</button>
				</div>
			</div>
		</div>
	);
};

export default BarcodeScanner;

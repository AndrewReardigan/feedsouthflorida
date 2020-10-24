import React, { useState, useContext } from 'react';
import { db } from '../apis/firebase';
import Webcam from 'react-webcam';
import axios from 'axios';

const baseUrl = 'https://api-beta.bite.ai/';

// const convertB64toBlob = (b64) => {
// 	const base64 = b64; // Place your base64 url here.
// 	fetch(base64).then((res) => res.blob()).then((blob) => {
// 		console.log(blob);
// 		const fd = new FormData();
// 		fd.append('image', blob);
// 		console.log(fd);
// 		return fd;
// 	});
// };

const sendPhotoToAPI = async (data) => {
	// console.log(formData);
	console.log(process.env.REACT_APP_LOG_MEAL_KEY);
	let image = new Image();
	image.src = data;
	const formData = new FormData();
	formData.append('image', image);
	const postOptions = {
		headers: {
			Authorization: 'Bearer ' + process.env.REACT_APP_LOG_MEAL_KEY,
			'Content-Type': 'multipart/form-data'
		}
	};
	try {
		const post = await axios.post(`https://api.logmeal.es/v2/recognition/type`, formData, postOptions);
	} catch (err) {
		console.log(err);
	}
};

/**
 * Component to capture Image of food items to donate.
 * @returns {Component} Camera - React functional component with webcam capture. 
 */
const Camera = () => {
	const webcamRef = React.useRef(null);

	const capture = React.useCallback(
		() => {
			const imageSrc = webcamRef.current.getScreenshot();
			sendPhotoToAPI(imageSrc);
		},
		[ webcamRef ]
	);

	return (
		<div>
			<h1>Camera</h1>
			<Webcam audio={false} height={720} ref={webcamRef} screenshotFormat="image/jpeg" width={1280} />
			<button onClick={capture}>Capture photo</button>
		</div>
	);
};

export default Camera;

// import requests
// img = <'replace-with-path-to-image'>
// api_user_token = <'replace-with-your-api-user-token'>
// headers = {'Authorization': 'Bearer ' + api_user_token}
//
// # Food Type Detection
// url = 'https://api.logmeal.es/v2/recognition/type'
// resp = requests.post(url,files={'image': open(img, 'r')}, headers=headers)
// print(resp.json()) # display json response

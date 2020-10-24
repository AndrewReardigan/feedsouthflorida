import React, { useState, useContext } from 'react';
import { db } from '../apis/firebase';
import Webcam from 'react-webcam';
import axios from 'axios';

const sendPhotoToAPI = async () => {};

/**
 * Component to capture Image of food items to donate.
 * @returns {Component} Camera - React functional component with webcam capture. 
 */
const Camera = () => {
	return (
		<div>
			<h1>Camera</h1>
		</div>
	);
};

export default Camera;

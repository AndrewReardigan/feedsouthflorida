import logo from './logo.svg';
import React from 'react'
import Signup from './components/Signup'
import './App.css';
import BarcodeScanner from './components/BarcodeScanner';
import CheckTheProduct from './components/CheckTheProduct'

function App() {
  return (
    <div className="App">
      <BarcodeScanner />

    </div>
  );
}

export default App;

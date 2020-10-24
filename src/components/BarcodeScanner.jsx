import React, { useState } from 'react'
import BarcodeScannerComponent from "react-webcam-barcode-scanner";

const BarcodeScanner = () => {
    
 
        const [ data, setData ] = useState('Not Found');
       
        return (
          <>
            <BarcodeScannerComponent
              width={500}
              height={500}
              onUpdate={(err, result) => {
                if (result) setData(result.text)
                else setData('Not Found')
              }}
            />
            <p>{data}</p>
            <p>{console.log(data)}</p>
          </>
        )
      }



export default BarcodeScanner

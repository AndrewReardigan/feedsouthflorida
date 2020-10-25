import React, { useState } from 'react'
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import CheckTheProduct from './CheckTheProduct'

const BarcodeScanner = () => {
    
 
        const [ data, setData ] = useState(null);

        const [found, setFound] = useState(false)
       
        return (
          <>
            <BarcodeScannerComponent
              width={500}
              height={500}
              
                  onUpdate={(err, result) => {

                    if (!found && result){
                     setData(result.text)
                     setFound(true)
                     console.log(found)
                    }
                    // else setData('Not Found')
                  }}
            />
            {/* <p>{data}</p>
            <p>{console.log(data)}</p> */}
            <CheckTheProduct barCode={data}/>
          </>
        )
      }



export default BarcodeScanner

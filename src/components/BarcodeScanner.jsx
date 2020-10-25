import React, { useState } from 'react'
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import CheckTheProduct from './CheckTheProduct'
import '../App.css'

const BarcodeScanner = () => {
    
 
        const [ data, setData ] = useState(null);

        const [found, setFound] = useState(false)

        const itemData = () => {

        }


const videoConstraints = {

    aspectRatio: 0.6666666667
  };
       
        return (
          <>
          <div className="scan-header">DONATE</div>
            <BarcodeScannerComponent
            className="scanner"
              width="100%"
            //   height={720}
              margin="0"
              padding="0"
              videoConstraints={videoConstraints}
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

};

          </>
        )
      }



export default BarcodeScanner

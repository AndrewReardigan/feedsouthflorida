import Dynamsoft from 'dynamsoft-javascript-barcode';
Dynamsoft.BarcodeReader.engineResourcePath = 'https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@7.6.0/dist/';
// Please visit https://www.dynamsoft.com/CustomerPortal/Portal/TrialLicense.aspx to get a trial license
Dynamsoft.BarcodeReader.productKeys =
	't0068NQAAAHwa+ll2JkEqkkWzgpMi5Hwfe0u1WrFTWAB99hK1m8m6EMvga9LfbLZRWR8zcXUK1VpWacPZc+xXO2zN0gV1epQ=';
// Dynamsoft.BarcodeReader._bUseFullFeature = true; // Control of loading min wasm or full wasm.
export default Dynamsoft;

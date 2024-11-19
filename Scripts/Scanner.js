// Code to Scan the roll number from the barcode behind the ID card


document.addEventListener('DOMContentLoaded', () => {
    a = 0;
    const videoElementMain = document.getElementById('test-camera');
    const videoElement = document.getElementById('test-camera-hidden');
    const barcodeResultElement = document.getElementById('barcode-result');
    const codeReader = new ZXing.BrowserMultiFormatReader();
    navigator.mediaDevices.getUserMedia({
        video: {
            facingMode: 'environment'
        }
    })
    .then((stream) => {
        videoElement.srcObject = stream;
        videoElement.play();
        scanBarcode();
    })
    .catch((err) => {
        // console.error('Error accessing camera:', err);
    });
    navigator.mediaDevices.getUserMedia({
        video: {
            facingMode: 'environment'
        }
    })
    .then((stream) => {
        videoElementMain.srcObject = stream;
        videoElementMain.play();
    })
    .catch((err) => {
        // console.error('Error accessing camera:', err);
    });

    function scanBarcode() {
        codeReader.decodeOnceFromVideoDevice(null, videoElement)
            .then(result => {
                if(a == 0){
                    a = 1;
                    document.getElementById('bScreen').style.opacity = 1;
                    HeartPop("center");
                    
                    setTimeout(function(){window.location.replace("main.html?k=" + result);},1000);
                }
            })
            .catch(err => {
                // console.error('Error reading barcode:', err);
            });
        setTimeout(scanBarcode, 500);
    }
});

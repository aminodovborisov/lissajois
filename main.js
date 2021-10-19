let radians = function(degrees) {
    return Math.PI * degrees / 180;
}

let lissPreCoordinates = function() {
    let ampliOne = document.getElementById('ampliOne').value;
    let freqOne = document.getElementById('freqOne').value;
    let phaseOne = document.getElementById('phaseOne').value;
    let ampliTwo = document.getElementById('ampliTwo').value;
    let freqTwo = document.getElementById('freqTwo').value;
    let phaseTwo = document.getElementById('phaseTwo').value;
    readyArray = [];
    for (let i = 0; i <= 720; i++) {
        let t = radians(i / 2);
        let x, y;
        if (ampliOne == 0 || freqOne == 0) {
            x = 0;
        } else {
            x = ampliOne * Math.sin(freqOne * t + radians(phaseOne));
        }
        if (ampliTwo == 0 || freqTwo == 0) {
            y = 0;
        } else {
            y = ampliTwo * Math.sin(freqTwo * t + radians(phaseTwo));
        }
        readyArray.push([x, y]);
    }
    return readyArray;
}

let coordinatesOnCanvas = function() {
    let arrPreCoordinates = lissPreCoordinates();
    let lenPre = arrPreCoordinates.length;
    let readyArray = []
    for (let i = 0; i < lenPre; i++) {
        let onePoint = arrPreCoordinates[i];
        readyArray.push([
            20 * onePoint[0] + 255,
            20 * onePoint[1] + 255
        ]);
    }
    return readyArray
}

function drawToCanvas() 
{
    let cnv = document.getElementById('canvasDraw');
    let ctx = cnv.getContext('2d');
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    let arrPoints = coordinatesOnCanvas();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#55d400';
    let startPoint = arrPoints[0];
    ctx.moveTo(startPoint[0], startPoint[1]);
    ctx.beginPath();
    for (let i = 1; i < arrPoints.length; i++) {
        let onePoint = arrPoints[i];
        ctx.lineTo(onePoint[0], onePoint[1]);
    }
    ctx.stroke();
    
}

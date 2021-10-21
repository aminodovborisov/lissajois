let radians = function(degrees) {
    return Math.PI * degrees / 180;
}

let lissPreCoordinates = function() {
    let freqOne = document.getElementById('freqOne').value;
    let phaseOne = document.getElementById('phaseOne').value;
    let freqTwo = document.getElementById('freqTwo').value;
    let phaseTwo = document.getElementById('phaseTwo').value;
    readyArray = [];
    for (let i = 0; i <= 720; i++) {
        let t = radians(i / 2);
        let x, y;
        if (freqOne == 0) {
            x = 0;
        } else {
            x = 10 * Math.sin(freqOne * t + radians(phaseOne));
        }
        if (freqTwo == 0) {
            y = 0;
        } else {
            y = 10 * Math.sin(freqTwo * t + radians(phaseTwo));
        }
        readyArray.push([x, y]);
    }
    return readyArray;
}

let coordinatesOnCanvas = function() {
    let canvasSize = document.getElementById('canvas-main').height;
    let arrPreCoordinates = lissPreCoordinates();
    let lenPre = arrPreCoordinates.length;
    let readyArray = []
    for (let i = 0; i < lenPre; i++) {
        let onePoint = arrPreCoordinates[i];
        readyArray.push([
            20 * onePoint[0] + 261,
            20 * onePoint[1] + 261
        ]);
    }
    return readyArray
}

function lessFreqOne() {
    let freqOne = document.getElementById('freqOne');
    let freqOneMin = parseInt(freqOne.min);
    let freqOneStep = parseInt(freqOne.step);
    let freqOneValue = parseInt(freqOne.value);
    if (freqOneValue - freqOneStep >= 0) {
        freqOne.value = freqOneValue - freqOneStep;
        drawToCanvas();
    }
}

function moreFreqOne() {
    let freqOne = document.getElementById('freqOne');
    let freqOneMax = parseInt(freqOne.max);
    let freqOneStep = parseInt(freqOne.step);
    let freqOneValue = parseInt(freqOne.value);
    if (freqOneValue + freqOneStep <= freqOneMax) {
        freqOne.value = freqOneValue + freqOneStep;
        drawToCanvas();
    }
}

function lessPhaseOne() {
    let phaseOne = document.getElementById('phaseOne');
    let phaseOneMin = parseInt(phaseOne.min);
    let phaseOneStep = parseInt(phaseOne.step);
    let phaseOneValue = parseInt(phaseOne.value);
    if (phaseOneValue - phaseOneStep >= 0) {
        phaseOne.value = phaseOneValue - phaseOneStep;
        drawToCanvas();
    }
}

function morePhaseOne() {
    let phaseOne = document.getElementById('phaseOne');
    let phaseOneMax = parseInt(phaseOne.max);
    let phaseOneStep = parseInt(phaseOne.step);
    let phaseOneValue = parseInt(phaseOne.value);
    if (phaseOneValue + phaseOneStep <= phaseOneMax) {
        phaseOne.value = phaseOneValue + phaseOneStep;
        drawToCanvas();
    }
}

function lessFreqTwo() {
    let freqTwo = document.getElementById('freqTwo');
    let freqTwoMin = parseInt(freqTwo.min);
    let freqTwoStep = parseInt(freqTwo.step);
    let freqTwoValue = parseInt(freqTwo.value);
    if (freqTwoValue - freqTwoStep >= 0) {
        freqTwo.value = freqTwoValue - freqTwoStep;
        drawToCanvas();
    }
}

function moreFreqTwo() {
    let freqTwo = document.getElementById('freqTwo');
    let freqTwoMax = parseInt(freqTwo.max);
    let freqTwoStep = parseInt(freqTwo.step);
    let freqTwoValue = parseInt(freqTwo.value);
    if (freqTwoValue + freqTwoStep <= freqTwoMax) {
        freqTwo.value = freqTwoValue + freqTwoStep;
        drawToCanvas();
    }
}

function lessPhaseTwo() {
    let phaseTwo = document.getElementById('phaseTwo');
    let phaseTwoMin = parseInt(phaseTwo.min);
    let phaseTwoStep = parseInt(phaseTwo.step);
    let phaseTwoValue = parseInt(phaseTwo.value);
    if (phaseTwoValue - phaseTwoStep >= 0) {
        phaseTwo.value = phaseTwoValue - phaseTwoStep;
        drawToCanvas();
    }
}

function morePhaseTwo() {
    let phaseTwo = document.getElementById('phaseTwo');
    let phaseTwoMax = parseInt(phaseTwo.max);
    let phaseTwoStep = parseInt(phaseTwo.step);
    let phaseTwoValue = parseInt(phaseTwo.value);
    if (phaseTwoValue + phaseTwoStep <= phaseTwoMax) {
        phaseTwo.value = phaseTwoValue + phaseTwoStep;
        drawToCanvas();
    }
}

function drawToCanvas()
{
    // Приводим в порядок значения - если вручную они введены некорректно
    let freqOne = document.getElementById('freqOne');
    let phaseOne = document.getElementById('phaseOne');
    let freqTwo = document.getElementById('freqTwo');
    let phaseTwo = document.getElementById('phaseTwo');

    if (parseInt(freqOne.value) > parseInt(freqOne.max)) {
        freqOne.value = freqOne.max;
    }
    if (parseInt(freqOne.value) < 0) {
        freqOne.value = 0;
    }
    if (parseInt(phaseOne.value) > parseInt(phaseOne.max)) {
        phaseOne.value = phaseOne.max;
    }
    if (parseInt(phaseTwo.value) < 0) {
        phaseTwo.value = 0;
    }
    if (parseInt(freqTwo.value) > parseInt(freqTwo.max)) {
        freqTwo.value = freqTwo.max;
    }
    if (parseInt(freqTwo.value) < 0) {
        freqTwo.value = 0;
    }
    if (parseInt(phaseTwo.value) > parseInt(phaseTwo.max)) {
        phaseTwo.value = phaseTwo.max;
    }
    if (parseInt(phaseTwo.value) < 0) {
        phaseTwo.value = 0;
    }

    let cnv = document.getElementById('canvas-main');
    let ctx = cnv.getContext('2d');
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.rect(0, 0, cnv.width, cnv.height);
    ctx.fill();
    let arrPoints = coordinatesOnCanvas();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#55d400';
    let startPoint = arrPoints[0];
    ctx.beginPath();
    ctx.moveTo(startPoint[0], startPoint[1]);
    for (let i = 1; i < arrPoints.length; i++) {
        let onePoint = arrPoints[i];
        ctx.lineTo(onePoint[0], onePoint[1]);
    }
    ctx.stroke();

}

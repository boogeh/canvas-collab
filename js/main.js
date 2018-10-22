'use strict'

var gCanvas = document.getElementById('main-canvas');
var gContext = gCanvas.getContext('2d');
var gShapeInterval;

function returnColor(elColor) {
    return elColor
}

function drawRect(ev) {
    var mouseX = ev.clientX;
    var mouseY = ev.clientY;
    gContext.fillStyle = 'blue';
    gShapeInterval = setInterval(function() {
        console.log(ev.clientX, ev.clientY)
    }, 50)
    gContext.fillRect(mouseX - gCanvas.offsetLeft - 50 , mouseY - gCanvas.offsetTop - 50 ,100,100)
    
}

function mouseDraw(ev) {
    var mouseX = ev.clientX
    var mouseY = ev.clientY
    console.log(mouseX, mouseY);
}



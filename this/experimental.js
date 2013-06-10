// JavaScript Document




$(document).ready(function () {

    var mousepos;



    function writeMessage(canvas, message) {
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.font = '18pt Calibri';
        context.fillStyle = 'black';
        context.fillText(message, 10, 25);
        rgb();
    }
    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    canvas.addEventListener('mousemove', function (evt) {
        mousePos = getMousePos(canvas, evt);
        var message = 'color = ' + color;
        writeMessage(canvas, message);
    }, false);

    canvas.addEventListener('mousedown', function (evt) {
        mousePos = getMousePos(canvas, evt);
        alert("x = " + mousepos.x + " y = " + mousepos.y);
        draw(mousepos.x, mousepos.y);
        
    }, false);

    
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var x;
    var wiidth;
    var color;
    color = "red";
    var mousepos;

    wiidth = window.innerWidth;
    var heiight = window.innerHeight;
    $("canvas").attr("height", heiight);
    $("canvas").attr("width", wiidth);

    




       function rgb() {

        $("canvas").drawImage({
            x: 28, y: 40,
            source: "images/red.png",
            fromCenter: false,
            layer: true,
            click: function (layer) {
                color = "red";
                writeMessage();
            }
        });
        $("canvas").drawImage({
            x: 28, y: 80,
            source: "images/blue.png",
            fromCenter: false,
            layer: true,
            click: function (layer) {
                color = "blue";
                writeMessage();
            }
        });
        $("canvas").drawImage({
            x: 28, y: 120,
            source: "images/green.png",
            fromCenter: false,
            layer: true,
            click: function (layer) {
                color = "green";
                writeMessage();
            }
        });

    }

    draw(x, y)
    {

        $("canvas").drawImage({
            x: x, y: y,
            source: "images/black.png",
            fromCenter: false,
            layer: true,
        });
    }




});






//$("#canvas").mousedown(function () {


//    alert("ohhi");

//});


//http://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
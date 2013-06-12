// JavaScript Document
var Mouse = { //make a globally available object with x,y attributes 
    x: 0,
    y: 0
}
var on = true;
var color;
var spray = false;
function spray() {
    alert("HI");
}
$(document).ready(function () {



    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var x;
    var wiidth;
    var num = 0;
    rgb();
    

    wiidth = window.innerWidth - 17;
    var heiight = window.innerHeight;
    $("canvas").attr("height", heiight);
    $("canvas").attr("width", wiidth);
    
    canvas.onmousemove = function (event) { // this  object refers to canvas object 
        Mouse = {
            x: event.pageX - this.offsetLeft,
            y: event.pageY - this.offsetTop }}

    var stop = false;

    $("canvas").mousedown(function () {
        if (spray == true) {
            Mouse.x = Mouse.x + Math.random() * 100 - 50;
            Mouse.y = Mouse.y + Math.random() * 100 - 50;
        }
            setInterval(function () {
                $("canvas").drawImage({
                    x: Mouse.x, y: Mouse.y,
                    source: "images/" + color + "small.png",
                    fromCenter: true,
                    layer: true,
                });
            }, 1);

    });
 
    $("canvas").mouseup(function () {
        window.clearInterval();
    });


    function text()
    {
      
    $("canvas").drawText({
        fillStyle: "#9cf",
        strokeStyle: "#25a",
        strokeWidth: 2,
        x: wiidth / 2, y: 20,
        fontSize: "36pt",
        fontFamily: "Verdana, sans-serif",
        text: "color = " + color
    });
    }

    function spray() {
        if (spray == true)
            spray = false;
        else { spray = true; }
    }
    function rgb() {

        $("canvas").drawImage({
            x: 28, y: 40,
            source: "images/red.png",
            fromCenter: false,
            layer: true,
            click: function (layer) {
                color = "red";
                text();
            }
        });
        $("canvas").drawImage({
            x: 28, y: 80,
            source: "images/blue.png",
            fromCenter: false,
            layer: true,
            click: function (layer) {
                color = "blue";
                text();
            }
        });
        $("canvas").drawImage({
            x: 28, y: 120,
            source: "images/green.png",
            fromCenter: false,
            layer: true,
            click: function (layer) {
                color = "green";
                text();
            }
        });

    }

});


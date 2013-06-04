// JavaScript Document

var x,
    wiidth;

$(document).ready(function(){


var wiidth = window.innerWidth;
var heiight = window.innerHeight;

$("canvas").attr("height", heiight);
$("canvas").attr("width", wiidth);


canvas.addEventListener('mousemove', function (evt) {
    var mousePos = getMousePos(canvas, evt);
    alert("yourbgd");
    rgb(mousePos.x, mousePos.y);
}, false);




x = 1;   
if (wiidth > 650)
{
    x = 2;
}
if (wiidth > 980)
{
    x = 3;
}


});


function rgb(xpos, ypos)
{
    var arr;
    arr = [red, green, blue];
    var counter = 0;


    
    $("canvas").drawImage({
        x: xpos, y: ypos,
        source: "images/triangle.png",
        fromCenter: false,
        layer: true,
        mouseover: function (layer) {
            // Click a star to spin it
            $(this).animateLayer(layer, {
                rotate: '+=144',
                scale: '-=1.1'
            });
        }

    });
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



// JavaScript Document
$(document).ready(function(){


var wiidth = window.innerWidth;
var heiight = window.innerHeight;

$("canvas").attr("height", heiight);
$("canvas").attr("width", wiidth);

var x = 5;
var y = 8;
var counter = 0;

if (wiidth > 650)
{
    howmanyx = 10;
    howmanyy = 15;
}
if (wiidth > 980)
{
    howmanyx = 20;
    howmanyy = 15;
}

var spacex = wiidth / howmanyx;
var spacey = heiight / howmanyy;

for (i = 0; i < howmanyy; i++)
{
    for (u = 0; u < howmanyx; u++)
    {
        var you = spacex * u;
        var eye = spacex * i;
        triangle(you, eye);
    }}});


function triangle(xpos, ypos)
{
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
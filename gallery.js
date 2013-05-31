  // JavaScript Document
$(document).ready(function (e) {
    $("#shade").attr("visibility", "hidden");
	//all jquery goes here
    //THIS CODE ASSUMES YOU CTRL+A > F2 > #whatDidYouMultiNameAllYourPictures# > ENTER IN THE "GALLERY" FOLDER
	//---------------------\/
	var numberOfPictures = 14;
	
	//----------------------\/
	var whatDidYouMultiNameAllYourPictures = "picture"
    var jpegsOrPngs = "JPG"
	var whereAreWeAt = 1;
	
	var howManyCollumns;

	if (window.innerWidth <= 650)
	{
	    howManyCollumns = 2;
	}
	if (window.innerWidth > 650 && window.innerWidth <= 980)
	{
	    howManyCollumns = 3;
	}
	if (window.innerWidth > 980)
	{
	    howManyCollumns = 5;
	}

	var rows = numberOfPictures / howManyCollumns;
	

	
	var theWholeThing = "<table width=\"100%\">";
	rows = Math.floor(rows);
	
	var collumns = howManyCollumns;
    //rows
    //thewholething
	var counter = 1;
    var percent = 100 / howManyCollumns
	for (u = 0; u < rows; u++)
	{
        theWholeThing += "<tr>"
	    for (I = 0; I < collumns; I++)
	    {
	        theWholeThing += "<td width=" + percent + "% ><img onclick=\"fullscreen(" + counter + ")\" height=\"300\" width=\"100%\" src=\"images/gallery/picture (" + counter + ")." + jpegsOrPngs + "\">"
	        counter++;
	    }
        theWholeThing += "</tr>"
	}
	$("#content").html(theWholeThing);
	    //tr - row
        //td - collumn



});
function fullscreen(picnum)
{
    
    $("#shade").attr("background-color", "#666");
    $("#shade").attr("opacity", "50%");
    $("#shade").attr("opacity", "50%");
    $("#shade").attr("position", "absolute");
    $("#shade").attr("top", "0");
    $("#shade").attr("left", "0");
    $("#shade").attr("opacity", "50%");
    $("#shade").attr("width", "3000");
    $("#shade").attr("height", "3000");

    alert("did it");
}
// JavaScript Document
$(document).ready(function (e) {
    alert("hi");
	//all jquery goes here
    //THIS CODE ASSUMES YOU CTRL+A > F2 > #whatDidYouMultiNameAllYourPictures# > ENTER IN THE "GALLERY" FOLDER
	//---------------------\/
	var numberOfPictures = 14;
	//----------------------\/
	var whatDidYouMultiNameAllYourPictures = "picture"
    var jpegsOrPngs = "jpeg"
	var whereAreWeAt = 1;
	
	var howManyCollumns = 0;

	if (screen.width <= 650)
	{
	    howManyCollumns = 2;
	}
	if (screen.width > 650 && screen.width <= 980)
	{
	    howManyCollumns = 4;
	}
	if (screen.width > 980)
	{
	    howManyCollumns = 6;
	}

	document.getElementById("content") = "<p>hi</p>";

	var rows = numberOfPictures/howManyCollumns;
	var leftovers = numberOfPictures%howManyCollumns;
	var whenShouldIStop = rows * howManyCollumns - leftovers;

	var theWholeThing = "<table width=\"100%\">";
	if (counter != whenShouldIStop) {
	    for (I = 0; I < rows; I++) {
	        theWholeThing += "<tr>"
	        for (o = 0; o < howManyCollumns; o++) {
	            theWholeThing += "<td><img src=\"images/gallery/" + whatDidYouMultiNameAllYourPictures + " (" + whereAreWeAt + ")." + jpegsOrPngs + "</td>";
	            counter++;
	        }
	        theWholeThing += "</tr>";
	    }
	    theWholeThing += "</table>";
	}

	document.getElementById("content") = theWholeThing;


	    //tr - row
        //td - collumn



});

function teeAre(howmanycollumnsagain) {

}
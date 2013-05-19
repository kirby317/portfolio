  // JavaScript Document
$(document).ready(function (e) {
	//all jquery goes here
    //THIS CODE ASSUMES YOU CTRL+A > F2 > #whatDidYouMultiNameAllYourPictures# > ENTER IN THE "GALLERY" FOLDER
	//---------------------\/
	var numberOfPictures = 14;
	
	//----------------------\/
	var whatDidYouMultiNameAllYourPictures = "picture"
    var jpegsOrPngs = "jpeg"
	var whereAreWeAt = 1;
	
	var howManyCollumns;

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

	var rows = numberOfPictures / howManyCollumns;
	
	var leftovers = numberOfPictures%howManyCollumns;
	//this too
	var whenShouldIStop = rows * howManyCollumns - leftovers;
	//this is wrong
	
	var theWholeThing = "<table width=\"100%\">";
	alert("rows" + rows + "the whole thing" + theWholeThing + "collumns" + howManyCollumns);


 //add where should I stop
	    for (I = 0; I < rows; I++) {
	        theWholeThing += "<tr>"
	        alert(theWholeThing);
	        for (o = 0; o < howManyCollumns; o++) {
	            theWholeThing += "<td><img src=\"images/gallery/" + whatDidYouMultiNameAllYourPictures + " (" + whereAreWeAt + ")." + jpegsOrPngs + "</td>";
	            counter++;
	            
	        }
	        theWholeThing += "</tr>";
	    }
	    theWholeThing += "</table>";
	
	alert(theWholeThing);
	var asdf = document.getElementById("content");
	asdf.innerHTML = theWholeThing;


	    //tr - row
        //td - collumn



});

function teeAre(howmanycollumnsagain) {

}
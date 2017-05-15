$(document).ready(function(){

//Variables 
var topics = ['the office', 'michael scott', 'pam beesley', 'jim halpert', 'thats what she said'];
// var newBtn = $("<div>");

for (var i = 0; i < topics.length; i++) {
	$(".gif-buttons").append("<button type='button' name=' "+ topics[i] +"' class='btn btn-primary'> "+ topics[i] +" </button>");
}

$(".btn-primary").on("click", function(){
//Variables defining Giphy API URL & user search term	
	var currentBtn = $(this).attr("data-name");
	var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ currentBtn +"&api_key=dc6zaTOxFJmzC&limit=10";
	// var userSearch = $("#srch-term").val();

//AJAX call to Giphy API	
	$.ajax ({
		url: queryURL,
		method: 'GET'
	}).done(function(results){

//Variables for Giphy object
		var gif = results.data[0];	
		var rating = gif.rating;
		var still = gif.images.fixed_height_still.url;
		var animate = gif.images.looping.mp4;
		console.log(rating);	
		console.log(gif);
		console.log(still);
		console.log(animate);

		$()
	})

});

//On click function to store user search term and run ajax call
// $("#searchBtn").on("click", function(){

// });

});
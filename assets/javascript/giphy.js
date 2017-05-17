$(document).ready(function(){

//Variables 
var topics = ['the office', 'michael scott', 'pam beesley', 'jim halpert', 'thats what she said'];
// var newBtn = $("<div>");

for (var i = 0; i < topics.length; i++) {
	$(".gif-buttons").append("<button type='button' data-name='"+ topics[i] +"' class='btn btn-primary'> "+ topics[i] +" </button>");
}

$(".btn-primary").on("click", function(){
//Variables defining Giphy API URL & user search term	
	var currentBtn = $(this).attr("data-name");
	var queryURL = "http://api.giphy.com/v1/gifs/search?q="+currentBtn+"&api_key=dc6zaTOxFJmzC&limit=10";

//AJAX call to Giphy API	
	$.ajax ({
		url: queryURL,
		method: "GET"
	}).done(function(results){

//Variables for Giphy object
		var gif = results.data;	
		
		for (var i = 0; i < gif.length; i++) {

			var rating = gif[i].rating;
			var still = gif[i].images.fixed_height_still.url;
			var animate = gif[i].images.fixed_height.url;

			$(".first-three-gifs").append("<div class='giftastic'> <p class='rating'>Rating:  "+ rating +" </p> <img src='"+ still +"'> </div>");
		}
	})

});

//On click function to store user search term and run ajax call
// $("#searchBtn").on("click", function(){

// });

//Animate gifs on click
// $(".giftastic").on("click", function(){
// 	// var animate = gif.images.fixed_height.url;
// 	$(".first-three-gifs").html("<img src='"+ animate +"'>");
// });

});
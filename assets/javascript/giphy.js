$(document).ready(function(){

//On click function to store user search term and run ajax call
$("#searchBtn").on("click", function(){

//Variables defining Giphy API URL & user search term	
	var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ userSearch +"&api_key=dc6zaTOxFJmzC&limit=9";
	var userSearch = $("#srch-term").val();

//AJAX call to Giphy API	
	$.ajax ({
		url: queryURL,
		method: 'GET'
	}).done(function(results){

//Variables for Giphy object
		var gif = results.data[0];	
		var rating = gif.rating;
		console.log(rating);	
		console.log(gif);
	})

});

});
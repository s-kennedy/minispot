var Minispot = window.Minispot || {};

var response;

Minispot.search = function() {

	var search_button = document.querySelector('#search');

	search_button.addEventListener('click', function() {

		var query = document.querySelector('#query').value;
		var data = ""
		ajax(query, data, displayResult);
		
	});
}

function ajax(query, data, callback) {

	var req = new XMLHttpRequest();
	var url = "https://api.spotify.com/v1/search/?type=track&q=" + query;

	req.open("GET", url);  
	req.send(data); 
	req.onload = function(event) {
	  response = JSON.parse(event.target.response);
	  callback(response);
	};

}


function displayResult(response) {
	
	var song = response.tracks.items[0].name
	var artist = response.tracks.items[0].artists[0].name
	var image = response.tracks.items[0].album.images[0].url
	var preview = response.tracks.items[0].preview_url

	document.querySelector(".title").innerHTML = song;
	document.querySelector(".author").innerHTML = artist;
	document.querySelector(".cover img").src = image;
	document.querySelector("audio").src = preview;
}
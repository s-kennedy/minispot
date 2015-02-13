var Minispot = window.Minispot || {};

Minispot.search = function() {

	var search_button = document.querySelector('#search');

	search_button.addEventListener('click', function() {

		var query = document.querySelector('#query').value;
		var data = ""
		ajax(query, data, play);
		
	});
}

function ajax(query, data, callback) {

	var req = new XMLHttpRequest();
	var url = "https://api.spotify.com/v1/search/?type=track&q=" + query;

	req.open("GET", url);  
	req.send(data); 
	req.onload = function(event) {
	  var response = JSON.parse(event.target.response);
	  console.log(response);
	};

}

function play() {
	conosle.log("play baby play");
}
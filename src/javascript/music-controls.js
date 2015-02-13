var Minispot = window.Minispot || {};

Minispot.play = function() {
	
	var play_button = document.querySelector(".btn-play");

	play_button.addEventListener("click", function() {
		if (play_button.classList.contains("playing")) {
			document.querySelector("audio").pause();
			play_button.classList.remove("playing");
		} else {
			document.querySelector("audio").play();
			play_button.classList.add("playing");
		};
	});
}


/*****************************

VARIABLES

*****************************/

var music = document.getElementById("music");


var duration = music.duration ;
var playhead = document.getElementById('playhead');
var time = document.getElementById('audio-time');

// time.innerHTML = parseInt(duration/60);

/*****************************

FONCTIONS

*****************************/

function play() {
	if (music.paused) {
		music.play();
	} else { 
		music.pause();
	}
}
 
function timeUpdate() {
	var playPercent = 100 * (music.currentTime / duration);
	playhead.style.width = playPercent + "%";
}
 
// Gets audio file duration
// music.addEventListener("canplaythrough", function () {
// 	duration = music.duration;
// }, false);

console.log(duration);

/*****************************

EVENTS

*****************************/

music.addEventListener("timeupdate", timeUpdate, false);

$(document).ready(function(){

	$(".fa-bars").click(function(){

		$("header").css('display', 'block');
	});


	$(".fa-times").click(function(){

		$("header").css('display', 'none');
	});

})
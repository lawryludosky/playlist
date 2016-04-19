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

function playMusic() {
	if (music.paused) {
		music.play();
	} else { 
		music.pause();
	}
}

function stopMusic() {
	music.stop();
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

	//////////Apparition menu

	$(".fa-bars").click(function(){

		$("header").css('display', 'block');
	});


	$(".fa-times").click(function(){

		$("header").css('display', 'none');
	});

	//////////Apparition sous menu

	$("#nav-ajout").click(function(){

		$("#side-menu").css('display', 'none');
		$("#menu-ajouter").css('display', 'block');
	});

	$(".fa-arrow-left").click(function(){

		$("#side-menu").css('display', 'block');
		$("#menu-ajouter").css('display', 'none');
	});

})
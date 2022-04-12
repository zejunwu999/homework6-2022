var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("slow down this video");
	video.playbackRate *= 0.95;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("speed up this video");
	video.playbackRate /= 0.95;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("i want to skip!");
	if (video.currentTime < (video.duration - 15)){
		console.log("original time " + video.currentTime);
		video.currentTime += 15;
		console.log("new time " + video.currentTime);
	}
	else{
		video.currentTime = 0;
		video.play();
		console.log("new time " + video.currentTime);
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.volume == 0) {
		console.log("unmute this video");
		video.volume = 1;
		document.getElementById("mute").innerHTML = "Mute";
	}

	else {
		console.log("mute this video");
		video.volume = 0;
		document.getElementById("mute").innerHTML = "Unmute";
	}
});

// var slider = document.getElementById("slider");
// var output = document.getElementById("volume");
// output.innerHTML = slider.value;

// slider.oninput = function() {
// 	output.innerHTML = this.value;
// };

slider.addEventListener("change", function() {
	console.log(this.value);
	video.volume = this.value/100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});
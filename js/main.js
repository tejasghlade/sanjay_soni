// Header Scroll

// Todo : 1st
var vid = document.getElementById("first_video");
var vidIcon = document.getElementById("videoIcon")


function playpause() {
    if (vidIcon.classList.contains('true')){
        vidIcon.classList.remove('fa-circle-play');
        vidIcon.classList.remove('true')
        vidIcon.classList.add('fa-circle-pause');
        vid.pause();
    } else {
        vid.play();
        vidIcon.classList.add('true')
        vidIcon.classList.remove('fa-circle-pause');
        vidIcon.classList.add('fa-circle-play');
    }
}

function video() {
    playpause();
    console.log('play')
}


// Todo : 2nd
var second = document.getElementById("second_video");
var secondIcon = document.getElementById("second_icon")

function playpause2() {
    if (secondIcon.classList.contains('true')){
        secondIcon.classList.remove('fa-circle-play');
        secondIcon.classList.remove('true')
        secondIcon.classList.add('fa-circle-pause');
        second.pause();
    } else {
        second.play();
        secondIcon.classList.add('true')
        secondIcon.classList.remove('fa-circle-pause');
        secondIcon.classList.add('fa-circle-play');
    }
}

function video2() {
    playpause2();
    console.log('play')
}

// Todo : 3rd
var third = document.getElementById("third_video");
var thirdIcon = document.getElementById("third_icon")

function playpause3() {
    if (thirdIcon.classList.contains('true')){
        thirdIcon.classList.remove('fa-circle-play');
        thirdIcon.classList.remove('true')
        thirdIcon.classList.add('fa-circle-pause');
        third.pause();
    } else {
        third.play();
        thirdIcon.classList.add('true')
        thirdIcon.classList.remove('fa-circle-pause');
        thirdIcon.classList.add('fa-circle-play');
    }
}

function video3() {
    playpause3();
    console.log('play')
}

// Todo : 4th
var fourth = document.getElementById("fourth_video");
var fourthIcon = document.getElementById("fourth_icon")


function playpause4() {
    if (fourthIcon.classList.contains('true')){
        fourthIcon.classList.remove('fa-circle-play');
        fourthIcon.classList.remove('true')
        fourthIcon.classList.add('fa-circle-pause');
        fourth.pause();
    } else {
        fourth.play();
        fourthIcon.classList.add('true')
        fourthIcon.classList.remove('fa-circle-pause');
        fourthIcon.classList.add('fa-circle-play');
    }
}

function video4() {
    playpause4();
    console.log('play')
}

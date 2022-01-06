let video = document.getElementById('vid')
let remainningTime = document.getElementById('remainningTime')
let totalTime = document.getElementById('totalTime')
let playPause = document.getElementById('playPause')
let begin = document.getElementById('begin')
let rewind = document.getElementById('rewind')
let fastForward = document.getElementById('fastForward')
let end = document.getElementById('end')
let stop = document.getElementById('stop')
let volume = document.getElementById('volume"')
let mute = document.getElementById('mute')
let scrubber = document.getElementById('scrubber"')
let playpackRate = document.getElementById('playpackRate')

let TIME_STEP = 5
let vol = 0

//Formate our TIME

let formateTime = function (seconds){
    seconds = Math.round(seconds)

    let minutes = 0;

    if(seconds>=60){
        minutes = Math.floor(seconds/60)
        console.log(minutes)
        seconds=(seconds- (minutes * 60))
        console.log(seconds)
    }

    seconds = seconds + ' ';
    if(seconds.length == 1){
        seconds = '0' + seconds
    }

    return minutes + ':' + seconds
}

//console.log(formateTime(62))

//Play or Pause Feature

let playOrPauseVideo = function(){
    if(video.paused || video.ended){
        video.play();
        playPause.innerHTML = 'Pause'
    }else{
        video.pause();
        playPause.innerText= 'Play'
    }
}

//Add event Listener

video.addEventListener('click',playOrPauseVideo,false)

//Toggle Play or Pause

playPause.addEventListener('click',playOrPauseVideo,false)

//Stop Functionality

stop.addEventListener('click',function(){
    video.pause();
    video.currentTime = 0;
    playPause.innerText = 'Play'
    video.playpackRate = 1;
    playpackRate.value = 1;
},false)

//Begin

begin.addEventListener('click',function(){
    video.currentTime=0;
},false)

//Rewind

rewind.addEventListener('click',function(){
    video.currentTime -= TIME_STEP;
},false)

//Fast Forward

fastForward.addEventListener('click',function(){
    video.currentTime += TIME_STEP;
},false)

//End 

end.addEventListener('click',function(){
    video.currentTime= video.duration;
    playPause.innerText = 'Play'
},false)

//Volume

volume.addEventListener('change',function(){
    video.volume = this.value
},false)

//Mute 

mute.addEventListener('click',function(){
    if(!video.muted){
        vol = volume.value;
    }
    video.muted = !video.muted;

    if(video.muted){
        volume.value=0;
        mute.innerText= 'Unmute';
    }else{
        volume.value=vol;
        mute.innerText = 'Mute'
    }
},false)

//scrubber

scrubber.addEventListener('change',function(){
    video.currentTime = this.value;
},false)

//Play back Rate

playpackRate.addEventListener('change',function(){
    video.playpackRate = this.value;
},false)

// Take Time Duration

video.addEventListener('play',function(){
    totalTime.innerText = formateTime(video.duration)
})

video.addEventListener('timeupdate',function(){
    remainningTime.innerText = formateTime(video.currentTime)
    scrubber.value = video.currentTime;
},false)



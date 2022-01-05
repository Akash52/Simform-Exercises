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

console.log(formateTime(62))


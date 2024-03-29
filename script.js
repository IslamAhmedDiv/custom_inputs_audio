
function create_custom_audio_range(){
    //========= global variables =========
    const audioFile = document.getElementById("audioFile")
    // if(!audioFile.duration){ return}
    const durAudSpan = document.getElementById("durAud")
    const curTimeSpan = document.getElementById("curTime")
    const customRngAud = document.getElementById("customRangeAudio")
    const iconPlay =document.getElementById("iconPlay")
    const dur = Math.floor(audioFile.duration)
    customRngAud.max = dur
    let min = Math.floor(dur/60)
    let sec = dur % 60

    //========= add zero to number if less than 10 =========
    function addZero(num) {
        if (num < 10){ num ="0"+ num; return num }
        else {return num}
    }

    //========= on seeking custom input range: convert its value to duration time, and put it in a span =========
    customRngAud.oninput = ()=>{
        let durRng = customRngAud.value
        let min = Math.floor(durRng/60)
        let sec = durRng % 60
        audioFile.currentTime = durRng
        curTimeSpan.innerHTML= `${addZero(min)}:${addZero(sec)}/`
        audioFile.play()
    }

    durAudSpan.innerHTML= `${addZero(min)}:${addZero(sec)}`

    //========= toggle play audio =========
    iconPlay.onclick = ()=>{
        if (audioFile.paused === true) {
            audioFile.play()
            iconPlay.classList.add("fa-pause")
            iconPlay.classList.remove("fa-play")
        }
        else {
            audioFile.pause()
            iconPlay.classList.add("fa-play")
            iconPlay.classList.remove("fa-pause")

        }
    }
}

window.onload=()=>{
    create_custom_audio_range()
}

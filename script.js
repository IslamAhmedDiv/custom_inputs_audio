
function create_custom_audio_range(){
    //========= global variables =========
    const audioFile = document.getElementById("audioFile")
    if(!audioFile.duration){ return}
    const durAudSpan = document.getElementById("durAud")
    const curTimeSpan = document.getElementById("curTime")
    const customRngAud = document.getElementById("customRangeAudio")
    const customRangeVolume = document.getElementById("customRangeVolume")
    const iconPlay =document.getElementById("iconPlay")
    const iconVolume =document.getElementById("iconVolume")
    const dur = Math.floor(audioFile.duration)

    customRngAud.max = dur
    function getTime(dur){
        let min = Math.floor(dur/60)
        let sec = dur % 60
        return {min: min, sec: sec}
    }


    //========= add zero to number if less than 10 =========
    function addZero(num) {
        if (num < 10){ num ="0"+ num; return num }
        else {return num}
    }

    //========= optimization fn putting time in html =========
    function putTimeHTML(dur){
        return `${addZero(getTime(+dur).min)}:${addZero(getTime(+dur).sec)}`
    }

    //========= on seeking custom input range: convert its value to duration time, and put it in a span =========
    customRngAud.oninput = ()=>{
        let durRng = customRngAud.value
        audioFile.currentTime = durRng
        curTimeSpan.innerHTML= putTimeHTML(durRng)
        audioFile.play()

        if (customRngAud.value !== "0") {
            audioFile.play()
            iconPlay.classList.add("fa-pause")
            iconPlay.classList.remove("fa-play")
        }

    }
    durAudSpan.innerHTML= putTimeHTML(dur)

    //========= on playing audio play custom range =========
    audioFile.ontimeupdate = ()=>{
        customRngAud.value = audioFile.currentTime
        curTimeSpan.innerHTML = putTimeHTML(customRngAud.value)
    }



    // to muted sound
    let volume = true
    let volumeVal
    iconVolume.onclick = ()=>{
        if(volume === true){
            iconVolume.classList.add("fa-volume-xmark")
            iconVolume.classList.remove("fa-volume-high")
            volumeVal = customRangeVolume.value
            audioFile.volume = customRangeVolume.value = 0
        }else{
            iconVolume.classList.remove("fa-volume-xmark")
            iconVolume.classList.add("fa-volume-high")
            customRangeVolume.value = audioFile.volume = volumeVal
        }
        volume = !volume
    }

    // on seeking custom range volume put its value in file audio
    customRangeVolume.oninput = ()=>{
        audioFile.volume = +customRangeVolume.value / 100
        volumeVal = customRangeVolume.value
        if(customRangeVolume.value === "0"){
            iconVolume.classList.add("fa-volume-xmark")
            iconVolume.classList.remove("fa-volume-high")
        }else{
            iconVolume.classList.remove("fa-volume-xmark")
            iconVolume.classList.add("fa-volume-high")
        }

    }


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

    const selectSpeed = document.getElementById("selectSpeed")
    selectSpeed.onchange = ()=>{
        audioFile.playbackRate = selectSpeed.value
    }

}

window.onload=()=>{
    create_custom_audio_range()
}

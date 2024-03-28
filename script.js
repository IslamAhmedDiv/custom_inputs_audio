function audioRange(){
    const audioRange = document.getElementById("audioRange")
    const durAud = document.getElementById("durAud")
    const curTime = document.getElementById("curTime")
    const inputRange = document.getElementById("inputRangeAudio")
    const dur = Math.floor(audioRange.duration)
    let min = Math.floor(dur/60)
    let sec = dur % 60
    inputRange.max = dur
    function addZero(num) {
        if (num < 10){ num ="0"+ num; return num }else {return num}
    }
    inputRange.oninput = ()=>{
        let durRng = inputRange.value
        let min = Math.floor(durRng/60)
        let sec = durRng % 60
        audioRange.currentTime = durRng
        curTime.innerHTML= `${addZero(min)}:${addZero(sec)}/`
        audioRange.play()

    }
    curTime.innerHTML= `00:00 /`
    durAud.innerHTML= `${addZero(min)}:${addZero(sec)}`
    console.log(dur)

    let iconPlay =document.getElementById("iconPlay")
    iconPlay.onclick = ()=>{
        console.log(audioRange.paused )
        if (audioRange.paused === true) {
            audioRange.play()
            iconPlay.classList.add("fa-pause")
            iconPlay.classList.remove("fa-play")
        }
        else {
            audioRange.pause()
            iconPlay.classList.add("fa-play")
            iconPlay.classList.remove("fa-pause")

        }
    }
}

window.onload=()=>{audioRange()}
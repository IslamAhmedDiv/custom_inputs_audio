function catchError(fn, message){
    try{
        fn()
    }catch(error){
        console.log(message)
    }
}

function audioRange(){
    const audioFile = document.getElementById("audioFile")
    if(!audioFile.duration){ return}
    const durAud = document.getElementById("durAud")
    const curTime = document.getElementById("curTime")
    const rangeAudio = document.getElementById("customRangeAudio")
    const dur = Math.floor(audioFile.duration)
    let min = Math.floor(dur/60)
    let sec = dur % 60
    rangeAudio.max = dur
    function addZero(num) {if (num < 10){ num ="0"+ num; return num }else {return num}}

    rangeAudio.oninput = ()=>{
        let durRng = rangeAudio.value
        let min = Math.floor(durRng/60)
        let sec = durRng % 60
        audioFile.currentTime = durRng

        curTime.innerHTML= `${addZero(min)}:${addZero(sec)}/`
        audioFile.play()

    }
    curTime.innerHTML= `00:00 /`
    durAud.innerHTML= `${addZero(min)}:${addZero(sec)}`
    console.log(dur)

    let iconPlay =document.getElementById("iconPlay")
    iconPlay.onclick = ()=>{
        console.log(audioFile.paused )
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

window.onload=()=>{audioRange()}

import RangeElements  from "/data/data.js"
function create_custom_audio_range(){


    //========= global variables =========
    // console.log(1)

    let Elements = document.querySelectorAll("[data-range]")

    Elements.forEach(elm=>{
        handelElement(elm)
    })



    function handelElement(audioFile){
        if(!audioFile.duration){return}
        let parent = audioFile.parentElement
        //*****************************************************************************************************
        //************************************** AUDIO RANGE TEMPLATE ****************************************
        const customRngAud = parent.querySelector(".customRangeAudio")
        const durAudSpan = parent.querySelector(".durAud")
        const curTimeSpan = parent.querySelector(".curTime")
        const dur = Math.floor(audioFile.duration)

        customRngAud.max = dur
        function getTime(dur){
            let min = Math.floor(dur/60)
            let sec = dur % 60
            return {min: min, sec: sec}
        }

        durAudSpan.innerHTML= putTimeHTML(dur)
        // add zero to number if less than 10

        function addZero(num) {
            if (num < 10){ num ="0"+ num; return num }
            else {return num}
        }

        // optimization fn putting time in html

        function putTimeHTML(dur){
            return `${addZero(getTime(+dur).min)}:${addZero(getTime(+dur).sec)}`
        }

        // on seeking custom input range: convert its value to duration time, and put it in a span

        customRngAud.oninput = ()=>{
            let durRng = customRngAud.value
            audioFile.currentTime = durRng
            curTimeSpan.innerHTML= putTimeHTML(durRng)
            audioFile.play()
            progressTime(customRngAud)

            if (customRngAud.value !== "0") {
                audioFile.play()
                iconPlay.classList.add("fa-pause")
                iconPlay.classList.remove("fa-play")
            }
        }



        // on playing audio play custom range

        audioFile.ontimeupdate = ()=>{
            customRngAud.value = audioFile.currentTime
            curTimeSpan.innerHTML = putTimeHTML(customRngAud.value)
            progressTime(customRngAud)
            // console.log(customRngAud)
        }

        function progressTime(input){
            const progress = (input.value / input.max ) * 100
            input.style.background = `linear-gradient(90deg, green ${progress}%, dodgerblue ${progress}%)`
        }
        progressTime(customRngAud)

        // toggle play audio key

        document.onkeydown = function (e) {
            if (e.key === " ") {
                iconPlay.click()
            }

        }

        // toggle play audio

        const iconPlay = parent.querySelector(".iconPlay");
        // const iconPlay = document.getElementById("iconPlay");

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



//==================================== END AUDIO RANGE TEMPLATE =======================================
//=====================================================================================================


//*****************************************************************************************************
//************************************** VOLUME RANGE TEMPLATE ****************************************

        // to toggle sound

        const customRangeVolume = parent.querySelector(".customRangeVolume")
        const iconVolume = parent.querySelector(".iconVolume")
        let volume = true
        let volumeVal
        iconVolume.onclick = ()=>{
            if(volume === true){
                iconVolume.classList.add("fa-volume-xmark")
                iconVolume.classList.remove("fa-volume-high")
                volumeVal = customRangeVolume.value
                audioFile.volume = customRangeVolume.value = "0"
            }else{
                iconVolume.classList.remove("fa-volume-xmark")
                iconVolume.classList.add("fa-volume-high")
                customRangeVolume.value = volumeVal
                audioFile.volume = volumeVal / 100
            }
            progressTime(customRangeVolume)
            volume = !volume
        }
        progressTime(customRangeVolume)


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
            progressTime(customRangeVolume)
        }

//==================================== END VOLUME RANGE TEMPLATE ======================================
//=====================================================================================================

//***************************************************************************************************
//**************************************  SPEED TEMPLATE ****************************************
//     const selectSpeed = document.getElementById("selectSpeed")
//     selectSpeed.onchange = ()=>{
//         audioFile.playbackRate = selectSpeed.value
//     }

        const custom_dropdown = parent.querySelector(".custom_dropdown")
        const lis = parent.querySelectorAll(".custom-dropdown li a")
        lis.forEach(li=>{
            li.onclick = ()=>{
                const valLi = li.dataset.value
                audioFile.playbackRate = valLi
                custom_dropdown.innerText = `${valLi}`
            }
        })


//==================================== END SPEED TEMPLATE =======================================
//=====================================================================================================

    }

}

window.onload=()=>{
    let elmnts = document.querySelectorAll("[data-range]")

    new Promise((res, )=>{
        elmnts.forEach(elm =>{
            let parent = elm.parentElement
            parent.innerHTML+= RangeElements
        })
        // console.log(0)
        res()
        // console.log(1)

    }).then(()=>{
        setTimeout(()=>{
            create_custom_audio_range()
            togglePlayAudioKey()
        }, 1000)
        // console.log(2)

    })

}
// toggle play audio key

// function togglePlayAudioKey(){
//     document.onkeydown = (e)=>{
//         const allAudioRing = document.querySelectorAll(".customRangeAudio");
//         allAudioRing.forEach((elm)=>{
//             const iconPlay = elm.closest(".iconPlay");
//             if(iconPlay.play){
//                 if (e.key === " "){
//                     iconPlay.click()
//                 }
//             }else{
//                 console.log("playing")
//
//             }
//         })
//
//
//     }
// }
//
// function togglePlayAudioKey() {
//     document.onkeydown = (e) => {
//         const allAudioRing = document.querySelectorAll(".customRangeAudio");
//         allAudioRing.forEach((elm) => {
//             const iconPlay = elm.closest(".iconPlay");
//             if (iconPlay) {
//                 const audio = iconPlay.querySelector(".audio");
//                 if (audio && audio.paused) {
//                     if (e.key === " ") {
//                         audio.play();
//                     }
//                 } else {
//                     if (e.key === " ") {
//                         audio.pause();
//                     }
//                 }
//             }
//         });
//     };
// }




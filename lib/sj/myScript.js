function seamlessPattern(){
    const sp = document.querySelectorAll(".seamless-pattern");
    sp.forEach(elm=>{
        let amount = +elm.getAttribute("data-amount")
        let angle = elm.getAttribute("data-rotate-angle")
        let pattern = elm.getAttribute("data-pattern")
        let parent = elm.parentElement
        let w = parent.clientWidth
        let l = parent.clientHeight
        let rows = Math.floor(Math.sqrt(amount * l / w))
        let cols = Math.floor(Math.sqrt(amount * w / l))
        let jus_mon = rows * cols
        if(pattern === "regular"){
            let c_i = 0
            let r_i = 0
            let n_e, cur_top_pos, cur_left_pos

            function set(i){
                n_e = elm.cloneNode(true)
                parent.insertBefore(n_e, elm)

                if(i % cols === 0){r_i++; c_i = 1}else{c_i++}
                cur_left_pos = (100 / cols * c_i) - (100 / cols) / 2
                cur_top_pos = (100 / rows * r_i) - (100 / rows) / 2
            }

            if(angle === "true"){
                for(let i=0; i<jus_mon; i++){
                    set(i)
                    let ang = Math.floor(Math.random() * (90 + 90)  - 90)
                    n_e.style.cssText = `top: ${cur_top_pos}%; left: ${cur_left_pos}%; transform: translate(-50%, -50%) rotate(${ang}deg)`
                }
            }else{
                for(let i=0; i<jus_mon; i++){
                    set(i)
                    n_e.style.cssText = `top: ${cur_top_pos}%; left: ${cur_left_pos}%;`
                }
            }

        }else{
            for(let i=0; i<amount; i++){
                let n_e = elm.cloneNode(true)
                parent.insertBefore(n_e, elm)
                random(n_e, angle)
            }
        }
        elm.remove()
    })
    function random(new_e, angle){
        let ang = Math.floor(Math.random() * (90 + 90)  - 90)
        let t = Math.floor(Math.random()*90)
        let l = Math.floor(Math.random()*90)
        if(angle ==="true"){
            new_e.style.cssText = `top: ${t}%; left: ${l}%; transform: translate(-50%, -50%) rotate(${ang}deg`
        }else{new_e.style.cssText = `top: ${t}%; left: ${l}%; `}
    }
}seamlessPattern()


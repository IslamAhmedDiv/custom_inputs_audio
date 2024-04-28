 const RangeElements =

    ` <div class="custom-range">
        <i class="fa fa-play icon-play iconPlay" id="iconPlay" ></i>
        <label class="range-audio range"> <span class="span-time"><span class="curTime">00:00</span> <span>/</span> <span class="durAud">full time</span></span> <input class="input-range customRangeAudio"  type="range" min="0" value="0" max=""></label>
        <label class="range-volume range"> <i class="fa-solid fa-volume-high volume iconVolume"></i><input value="100" class="input-range customRangeVolume" type="range" min="0" max="100" ></label>
        <div class="btn-group">
            <button type="button" class="btn btn-outline-secondary dropdown-toggle custom_dropdown" data-bs-toggle="dropdown" aria-expanded="false" style="width: 100px" >
                normal
            </button>
            <ul class="dropdown-menu custom-dropdown " >
                <li><a class="dropdown-item" data-value="0.25">0.25</a></li>
                <li><a class="dropdown-item" data-value="0.5">0.5</a></li>
                <li><a class="dropdown-item" data-value="0.75">0.75</a></li>
                <li><a class="dropdown-item" data-value="1">normal</a></li>
                <li><a class="dropdown-item" data-value="1.25">1.25</a></li>
                <li><a class="dropdown-item" data-value="1.5">1.5</a></li>
                <li><a class="dropdown-item" data-value="2">2</a></li>
            </ul>
        </div>
    </div>
`

export default RangeElements

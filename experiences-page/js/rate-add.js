let experiencesBox=document.querySelector(".experiences .items");

rateData.forEach((ele,i)=>{
    experiencesBox.innerHTML+=`
    <div class="item">
        <div class="item-circle">
            <div class="circle-shape">
            <div class="circle-box">  
                <span class="left-circle"></span>
            </div>
            <div class="circle-box">
                <span class="right-circle"></span>
            </div>
            </div>
            <div class="percent-val">0%</div>
        </div>
        <div class="title">${ele.title}</div>
        <div class="desc">
            ${ele.desc}
        </div>
        <div class="btn">
        <a href="#items">
            <svg>
                <polyline points="0,0 25,25 50,0"/>
                <polyline points="0,15 25,40 50,15"/>
                <polyline points="0,30 25,55 50,30"/>
            </svg>
            </a>
        </div>
    </div>
    `
});


let contentBox=document.querySelector(".contentBox");
let btnClick=document.querySelectorAll(".btn");
let experiencesTitle=document.querySelector(".experiences-desc .title");
let experiencesDesc =document.querySelector(".experiences-desc .desc");

let selectContent=[GraphicsDesingData,WebDevelopmentData,ITTechnologeData,DataSeinceData];

window.addEventListener("load",()=>{
    contentBox.innerHTML='';
    experiencesTitle.innerHTML=selectContent[0][0];
    experiencesDesc.innerHTML=selectContent[0][1];
    selectContent[0][2].forEach(ele=>{
        let arrayData='';
        ele.info.forEach(e=>{
            arrayData+=`
                <li>${e}</li>
            `;
        });
        contentBox.innerHTML+=`
            <div class="item">
                <div class="img" style="background-image:url('${ele.imageURL}')"></div>
                <div class="title">${ele.title}</div>
                <div class="desc">${ele.desc}</div>
                <div class="more-btn">more</div>
                <div class="listInfo">
                    <ul>
                       ${arrayData}
                    </ul>
                </div>
            </div>
        `;
    });
    
    let itemSkill=document.querySelectorAll(".contentBox .item");
    let moreBtn=document.querySelectorAll(".more-btn");
    let listInfo=document.querySelectorAll(".listInfo");
    let desc=document.querySelectorAll(".content .experiences-desc .item .desc");
    
    moreBtn.forEach((ele,i)=>{
        ele.addEventListener("click",()=>{
            if(ele.textContent=='more'){
                ele.textContent="less";
                listInfo[i].style.display="block";
                listInfo[i].style.visibility="visible";
                listInfo[i].style.opacity="1";
            }else{
                ele.textContent="more";
                listInfo[i].style.display="none";
                listInfo[i].style.visibility="hidden";
                listInfo[i].style.opacity="0";
            }
        });
    });
});


btnClick.forEach((e,i)=>{
    e.addEventListener("click",()=>{
        contentBox.innerHTML='';
        console.log(e);
        experiencesTitle.innerHTML=selectContent[i-1][0];
        experiencesDesc.innerHTML=selectContent[i-1][1];
        selectContent[i-1][2].forEach(ele=>{
            let arrayData='';
            ele.info.forEach(e=>{
                arrayData+=`
                    <li>${e}</li>
                `;
            });
            contentBox.innerHTML+=`
                <div class="item">
                    <div class="img" style="background-image:url('${ele.imageURL}')"></div>
                    <div class="title">${ele.title}</div>
                    <div class="desc">${ele.desc}</div>
                    <div class="more-btn">more</div>
                    <div class="listInfo">
                        <ul>
                           ${arrayData}
                        </ul>
                    </div>
                </div>
            `;
        });
        
        let itemSkill=document.querySelectorAll(".contentBox .item");
        let moreBtn=document.querySelectorAll(".more-btn");
        let listInfo=document.querySelectorAll(".listInfo");
        let desc=document.querySelectorAll(".content .experiences-desc .item .desc");
        
        moreBtn.forEach((ele,i)=>{
            ele.addEventListener("click",()=>{
                if(ele.textContent=='more'){
                    ele.textContent="less";
                    listInfo[i].style.display="block";
                    listInfo[i].style.visibility="visible";
                    listInfo[i].style.opacity="1";
                }else{
                    ele.textContent="more";
                    listInfo[i].style.display="none";
                    listInfo[i].style.visibility="hidden";
                    listInfo[i].style.opacity="0";
                }
            });
        })
    })
})

{
    
}
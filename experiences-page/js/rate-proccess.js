let homePage=document.querySelector(".home-page");
let rightCircle=document.querySelectorAll(".item .item-circle .right-circle");
let leftCircle=document.querySelectorAll(".item .item-circle .left-circle");
let percentBox=document.querySelectorAll(".percent-val");

/*
.left-circle:nth-child(1){animation-name: firstItem;}
.left-circle:nth-child(2){animation-name: secondItem;}
.left-circle:nth-child(3){animation-name: therdItem;}
.left-circle:nth-child(4){animation-name: fourItem;}
*/
let timeSpeed=0.04; // (2/90) 2:Time 90:Deg
let leftKeyFrame=['firstItem','secondItem','therdItem','fourItem'];
let percentValue=rateData.map(e=>+e.progression_level);
let percentSpeed=percentValue.map(e=>(e-50)*timeSpeed);
let deg=percentValue.map(e=>e*3.6);
let degVarName=["--firstDeg","--secondDeg","--thirdDeg","--fourthDeg"];
document.documentElement.style.setProperty(degVarName[0], deg[0]+"deg");
document.documentElement.style.setProperty(degVarName[1], deg[1]+"deg");
document.documentElement.style.setProperty(degVarName[2], deg[2]+"deg");
document.documentElement.style.setProperty(degVarName[3], deg[3]+"deg");
let state=0;
window.addEventListener("scroll",()=>{
    var homeHeight=homePage.offsetHeight;
    if (window.scrollY>homeHeight-(homeHeight/2) && state==0){
        state=1;
        rightCircle.forEach(ele=>{
            ele.style.animation="rightStart var(--timeRotate) linear both";
        });
        setTimeout(() => {
            leftCircle.forEach((ele,i)=>{
                ele.style.animationName=leftKeyFrame[i];
                ele.style.animationDelay="0s";
                ele.style.animationDuration=percentSpeed[i]+'s';
            });
        }, 2000);

        percentBox.forEach((ele,index)=>{
            let val=0;
            let iter=setInterval(() => {
                ele.innerHTML=val+"%";
                if (val===percentValue[index]) {
                    clearInterval(iter);
                }
                val++;
            }, 40);


        });
    }else if(window.scrollY<(homeHeight/2)){
        state=0;
        rightCircle.forEach(ele=>{
            ele.style.animation="stop var(--timeRotate) linear both";
        });
        leftCircle.forEach(ele=>{
            ele.style.animation="stop var(--timeRotate) linear both";
        });
    }
})
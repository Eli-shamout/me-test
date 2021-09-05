let recentWorkPro=document.querySelector(".recent-work .content-work .scroll-x");
let width=0;
recentWorkData.forEach((ele,i)=>{
    width+=310;
    recentWorkPro.innerHTML+=`<div class="item" style="background-image:url('${ele.imageURL}')"></div>`;
});
recentWorkPro.style.width=width+"px";

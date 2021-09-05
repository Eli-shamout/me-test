var recentWork=document.querySelector(".recent-work .content-work .scroll-x");
var recentWorkIteem=document.querySelectorAll(".recent-work .content-work .scroll-x .item");
var widthBox=recentWork.clientWidth;
let pos={left:0,x:0}
let image=[
    "C:/Users/Eile/Desktop/My WebSite/version 3/images/recent-work-images/01.jpg",
    "C:/Users/Eile/Desktop/My WebSite/version 3/images/recent-work-images/02.jpg",
    "C:/Users/Eile/Desktop/My WebSite/version 3/images/recent-work-images/03.jpg",
    "C:/Users/Eile/Desktop/My WebSite/version 3/images/recent-work-images/04.jpg",
    "C:/Users/Eile/Desktop/My WebSite/version 3/images/recent-work-images/05.jpg",
    "C:/Users/Eile/Desktop/My WebSite/version 3/images/recent-work-images/06.jpg",
    "C:/Users/Eile/Desktop/My WebSite/version 3/images/recent-work-images/07.jpg"
];
recentWorkIteem.forEach((ele,i)=>{
    ele.style.backgroundImage="url('"+image[i]+"')";
});


var rt = function() {
    return window.innerWidth - (recentWork.offsetLeft + recentWork.offsetWidth);
}

const mouseDown=function (){
    recentWork.style.cursor="grabbing";
    recentWork.addEventListener('mousemove', mouseMoveHandler);  
}

const mouseUp=function (){
    recentWork.removeEventListener('mousemove', mouseMoveHandler);   
    recentWork.style.cursor="grab";
    recentWork.style.userSelect="none";
}
var dd=0;
const mouseDownHandle=function (e) {
    pos={
        left:recentWork.offsetLeft,
        x:e.clientX,
    };
    dd= e.clientX - pos.x+pos.left;
}

const mouseMoveHandler=function(e) {
    var dx = e.clientX - pos.x+pos.left;
    let test=rt();
    console.log(dd);
    if (dx<=0 && test<=0){
        //console.log("e.clientX:",dx," - pos.x:",pos.x," - dx:",dx);
        recentWork.style.left=dx+"px";
    }else if(dx>dd && dx<=0){
        recentWork.style.left=dx+"px";
    }

}

recentWork.addEventListener("mousedown",mouseDownHandle);
recentWork.addEventListener("mousedown",mouseDown);
recentWork.addEventListener("mouseup",mouseUp);




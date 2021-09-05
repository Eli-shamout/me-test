let headerBox=document.querySelector('#header');
window.addEventListener("scroll",function(){
    if (window.scrollY>20){
        headerBox.style.background="#000000d6";
        headerBox.style.padding="10px 0px";
    }else{
        headerBox.style.background="initial";        
        headerBox.style.padding="30px 0px";
    }
});
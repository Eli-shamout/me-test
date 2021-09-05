let homeBox=document.querySelector('.home-page');
window.addEventListener("scroll",function(){
    if (window.scrollY<5){
        homeBox.style.height="105vh";
    }else{
        homeBox.style.height='100vh';
    }
})
let iconmenu = document.querySelector(".icons .fa-bars");
let iconClose = document.querySelector(".icons .fa-x");
let ulmob = document.querySelector(".ul-for-mob");

iconmenu.onclick = function() {
    ulmob.classList.add("active")
    iconmenu.style.display=`none`
    iconClose.style.display=`block`
};

iconClose.onclick = function() {
    ulmob.classList.remove("active");
    iconClose.style.display=`none`
    iconmenu.style.display=`block`
    
};


window.onresize=function(){
    if(window.innerWidth > 1200) {
        iconClose.style.display=`none`
        iconmenu.style.display=`none`
        ulmob.classList.remove("active");
    }else{
        iconmenu.style.display=`block`
    }
}


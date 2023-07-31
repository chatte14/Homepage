if(matchMedia("screen and (max-width: 767px)").matches){
    console.log("mobile");
  }else if(matchMedia("screen and (max-width: 1023px)").matches){
    console.log("tablet");
  }else if(matchMedia("screen and (min-width: 1024px)").matches){
    console.log("desktop");
  }
  
  window.onresize = function(){
    document.location.reload();
  };

 
 let mainText = document.querySelector('.main2__group__text');
 let mainText2 = document.querySelector('.main2__group__text2')

 window.addEventListener("scroll", function() {
    let value = window.scrollY;
    console.log("scrollY", value);


    if(value > 1250){
        mainText.style.animation = "slide-right 800ms ease-out forwards";
    } else {
        mainText.style.animation = "disappear-right 800ms ease-out forwards";
    };

    if(value > 2300){
        mainText2.style.animation = "slide-left 800ms ease-out forwards";
    } else {
        mainText2.style.animation = "disappear-left 800ms ease-out";
    };
 });


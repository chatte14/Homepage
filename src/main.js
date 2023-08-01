// 홈 섹션을 스크롤 할 때 홈 안에 내용을 투명도 주면서 자연스럽게 스크롤되게 표현함

const home = document.querySelector('.home__container');

const homeHeight = home.offsetHeight;

document.addEventListener('scroll', () => {
    home.style.opacity = 1.7 - window.scrollY / homeHeight;
});


let observerRight = new IntersectionObserver((e)=>{
    e.forEach((main2Text)=>{
        if(main2Text.isIntersecting){
            main2Text.target.style.opacity = 1;
            main2Text.target.style.transform = 'translateX(0)';
        } else {
            main2Text.target.style.opacity = 0;
            main2Text.target.style.transform = 'translateX(12%)';
        }
    })
})

let main2GroupText = document.querySelectorAll('.main2__group__text');
observerRight.observe(main2GroupText[0]);
observerRight.observe(main2GroupText[1]); 


let main2Img2 = document.querySelectorAll('.main2__img-2');
observerRight.observe(main2Img2[0]);
observerRight.observe(main2Img2[1]);
observerRight.observe(main2Img2[2]);
observerRight.observe(main2Img2[3]);

let newsGroupText = document.querySelectorAll('.news__group__text');
observerRight.observe(newsGroupText[0]);



let observerLeft = new IntersectionObserver((e)=>{
    e.forEach((main2Text2)=>{
        if(main2Text2.isIntersecting){
            main2Text2.target.style.opacity = 1;
            main2Text2.target.style.transform = 'translateX(0)';
        } else {
            main2Text2.target.style.opacity = 0;
            main2Text2.target.style.transform = 'translateX(-12%)';
        }
    })
})

let main2GroupText2 = document.querySelectorAll('.main2__group__text2');
observerLeft.observe(main2GroupText2[0]);
observerLeft.observe(main2GroupText2[1]);
observerLeft.observe(main2GroupText2[2]);
observerLeft.observe(main2GroupText2[3]);

let main2Img1 = document.querySelectorAll('.main2__img-1');
observerLeft.observe(main2Img1[0]);
observerLeft.observe(main2Img1[1]);

let newsGroupText2 = document.querySelectorAll('.news__group__text2');
observerLeft.observe(newsGroupText2[0]);



let observerOpacity = new IntersectionObserver((e)=>{
    e.forEach((main3Title)=>{
        if(main3Title.isIntersecting){
            main3Title.target.style.opacity = 1;
            main3Title.target.style.transform = 'translateY(0)'
        }else {
            main3Title.target.style.opacity = 0;
            main3Title.target.style.transform = 'translateY(12%)'
        }
    })
})


let main1 = document.querySelectorAll('.main1');
observerOpacity.observe(main1[0]);

let main3Title1 = document.querySelectorAll('.main3__title1');
observerOpacity.observe(main3Title1[0]);

let main3Title2 = document.querySelectorAll('.main3__title2');
observerOpacity.observe(main3Title2[0]);

// let about = document.querySelectorAll('.about');
// observerOpacity.observe(about[0]);

let download = document.querySelectorAll('.download');
observerOpacity.observe(download[0]);

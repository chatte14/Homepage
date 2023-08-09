// 홈 섹션을 스크롤 할 때 홈 안에 내용을 투명도 주면서 자연스럽게 스크롤되게 표현함

const home = document.querySelector(".home__container");

const homeHeight = home.offsetHeight;

document.addEventListener("scroll", () => {
  home.style.opacity = 1.6 - window.scrollY / homeHeight;
});

const addLoadFlagToTarget = (target) => {
  for (let i = 0; i < target.length; i++) {
    target[i].isLoaded = false; // 한번 화면에 실행되었다는 표시를 추가; 초기는 실행이 안되었기 떄문에 false
  }
  return target;
};

// 스크롤시 해당 영역에 오면 왼쪽 또는 오른쪽에서 슬라이드되며 나오는 액션
let observerRight = new IntersectionObserver((e) => {
  e.forEach((tag) => {
    console.log("tag.target.isLoaded => :", tag.target.isLoaded);
    if (tag.isIntersecting) {
      tag.target.style.opacity = 1;
      tag.target.style.transform = "translateX(0)";
    } else {
      if (tag.target?.isLoaded === false) {
        //  실행 안되었을때만 opacity 0 && translateX(12%)가 적용되게;
        tag.target.isLoaded = true; // 한번 실행되었으면 실행되었다는 true를 표시해줌. 그래야 다음부터는 바로 위에줄에서 걸러져서 이 밑으로 코드가 돌지를 않는다.
        tag.target.style.opacity = 0;
        tag.target.style.transform = "translateX(12%)";
      }
    }
  });
});

let observerLeft = new IntersectionObserver((e) => {
  e.forEach((tag) => {
    if (tag.isIntersecting) {
      tag.target.style.opacity = 1;
      tag.target.style.transform = "translateX(0)";
    } else {
      if (!tag.target?.isLoaded) {
        tag.target.isLoaded = true;
        tag.target.style.opacity = 0;
        tag.target.style.transform = "translateX(-12%)";
      }
    }
  });
});

let main2GroupText = addLoadFlagToTarget(
  document.querySelectorAll(".main2__group__text")
);

observerRight.observe(main2GroupText[0]);
observerRight.observe(main2GroupText[1]);

let main2Img2 = addLoadFlagToTarget(document.querySelectorAll(".main2__img-2"));
observerRight.observe(main2Img2[0]);
observerRight.observe(main2Img2[1]);
observerRight.observe(main2Img2[2]);
observerRight.observe(main2Img2[3]);

let newsGroupText = addLoadFlagToTarget(
  document.querySelectorAll(".news__group__text")
);
observerRight.observe(newsGroupText[0]);

let main2GroupText2 = addLoadFlagToTarget(
  document.querySelectorAll(".main2__group__text2")
);
observerLeft.observe(main2GroupText2[0]);
observerLeft.observe(main2GroupText2[1]);
observerLeft.observe(main2GroupText2[2]);
observerLeft.observe(main2GroupText2[3]);

let main2Img1 = addLoadFlagToTarget(document.querySelectorAll(".main2__img-1"));
observerLeft.observe(main2Img1[0]);
observerLeft.observe(main2Img1[1]);

let newsGroupText2 = addLoadFlagToTarget(
  document.querySelectorAll(".news__group__text2")
);
observerLeft.observe(newsGroupText2[0]);

let observerOpacity = new IntersectionObserver((e) => {
  e.forEach((main3Title) => {
    if (main3Title.isIntersecting) {
      main3Title.target.style.opacity = 1;
      main3Title.target.style.transform = "translateY(0)";
    } else {
      if (!main3Title.target?.isLoaded) {
        main3Title.target.isLoaded = true;
        main3Title.target.style.opacity = 0;
        main3Title.target.style.transform = "translateY(12%)";
      }
    }
  });
});

let main1 = addLoadFlagToTarget(document.querySelectorAll(".main1"));
observerOpacity.observe(main1[0]);

let main3Title1 = addLoadFlagToTarget(
  document.querySelectorAll(".main3__title1")
);
observerOpacity.observe(main3Title1[0]);

let main3Title2 = addLoadFlagToTarget(
  document.querySelectorAll(".main3__title2")
);
observerOpacity.observe(main3Title2[0]);

// let about = document.querySelectorAll('.about');
// observerOpacity.observe(about[0]);

let download = addLoadFlagToTarget(document.querySelectorAll(".download"));
observerOpacity.observe(download[0]);

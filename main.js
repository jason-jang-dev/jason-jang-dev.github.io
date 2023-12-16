let pageable = new Pageable("#container");


const content = "Minseo Jang, \n Design the algorithm.";
const text = document.querySelector(".typing_text1");
let i = 0;

function typing(){
    let txt = content[i++];
    if(i <= content.length){
        text.innerHTML += txt=== "\n" ? "<br/>": txt;
    }
}

setInterval(typing, 200)

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});
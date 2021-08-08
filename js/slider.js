///--- przasnyska slider ---///
const nextBtn = document.querySelector(".carousel__btn--right");
const prevBtn = document.querySelector(".carousel__btn--left");
const carouselNav = document.querySelector(".carousel__nav");
const carouselDemos = Array.from(document.querySelectorAll(".carousel__demo"));
const slide = document.querySelector(".slide");

const changeSlide = (targetDemo) => {
    let targetDemoSrc = targetDemo.src;
    let slicedSrc = targetDemoSrc.slice(0, -4);
    let sliderSrc = slicedSrc.concat("-rect.jpg");
    slide.src = sliderSrc;
}

carouselNav.addEventListener("click", e => {
    const targetDemo = e.target;
    if(!e.target.closest('img')) return;
    const currentDemo = carouselNav.querySelector(".current-demo");
    const targetIndex = carouselDemos.findIndex(pic => pic === targetDemo);

    changeSlide(targetDemo)
    updateDemo(currentDemo, targetDemo)
    hideShowArrows(carouselDemos, prevBtn, nextBtn, targetIndex)
})

const updateDemo = (currentDemo, targetDemo) => {
    currentDemo.classList.remove("current-demo");
    targetDemo.classList.add("current-demo");
}

const hideShowArrows = (carouselDemos, prevBtn, nextBtn, targetIndex) => {
    if(targetIndex === 0) {
        prevBtn.classList.add("is-hidden");
        nextBtn.classList.remove("is-hidden");
    } else if (targetIndex === carouselDemos.length - 1) {
        nextBtn.classList.add("is-hidden");
        prevBtn.classList.remove("is-hidden");
    } else {
        prevBtn.classList.remove("is-hidden");
        nextBtn.classList.remove("is-hidden");
    }
}

nextBtn.addEventListener('click', e => {
    const currentDemo = carouselNav.querySelector(".current-demo");
    const currentIndex = carouselDemos.findIndex(demo => demo === currentDemo);
    const nextIndex = currentIndex + 1;
    const nextDemo = carouselDemos[nextIndex]

    changeSlide(nextDemo)
    updateDemo(currentDemo, nextDemo)
    hideShowArrows(carouselDemos, prevBtn, nextBtn, nextIndex)
})

prevBtn.addEventListener('click', e => {
    const currentDemo = carouselNav.querySelector(".current-demo");
    const currentIndex = carouselDemos.findIndex(demo => demo === currentDemo);
    const prevIndex = currentIndex - 1;
    const prevDemo = carouselDemos[prevIndex]

    changeSlide(prevDemo)
    updateDemo(currentDemo, prevDemo)
    hideShowArrows(carouselDemos, prevBtn, nextBtn, prevIndex)
})

console.log('hello')
const slider = document.querySelector('.slider-modal')
console.log(slider.children)
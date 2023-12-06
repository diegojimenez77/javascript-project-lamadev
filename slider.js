const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.img');
const buttons = document.querySelector('.buttons');

let slideNumber = 1;
const length = images.length;

for (let i = 0; i < length; i++){
    const div = document.createElement('div');
    div.className = 'button';
    buttons.appendChild(div);
}

const allButtons = document.querySelectorAll('.button');
allButtons[0].style.backgroundColor = 'white';

const resetBg = () => {
    allButtons.forEach((button) => {
        button.style.backgroundColor = 'transparent';
    });
};

allButtons.forEach((button, i) => {
    button.addEventListener('click', () => {
        resetBg();
        slider.style.transform = `translateX(-${i * 500}px)`;
        slideNumber = i + 1;
        button.style.backgroundColor = 'white';
        console.log(slideNumber);
    })
});

const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 500}px)`;
    slideNumber++;
};

const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber-2) * 500}px)`;
    slideNumber--;
};

const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
};

const getLastSlide = () => {
    slider.style.transform = `translateX(-${(length-1)*500}px)`;
    slideNumber = length;
};

const changeColor = () => {
    resetBg()
    allButtons[slideNumber-1].style.backgroundColor = 'white';
}

right.addEventListener("click",() => {
    slideNumber < length ? nextSlide() : getFirstSlide();
    console.log(slideNumber);
    changeColor();
});

left.addEventListener("click", () => {
    slideNumber > 1 ? prevSlide() : getLastSlide();
    console.log(slideNumber);
    changeColor();
});


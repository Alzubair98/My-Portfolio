const soundIcon = document.querySelector(".sound-icon");
const off = document.querySelector('#off');
const on = document.querySelector('#on');
const myAudio = document.querySelector('#pageAudio');



off.addEventListener('click', () => {
    off.classList.toggle('active');
    on.classList.toggle('active');
    soundIcon.classList.toggle('active');
    myAudio.play();
})

on.addEventListener('click', () => {
    on.classList.toggle('active');
    off.classList.toggle('active');
    soundIcon.classList.toggle('active');
    myAudio.pause();
})


// the menu 

const hambugerButton = document.querySelector(".hamburger-button")
const hiddenMenu = document.querySelector('.aside')

hambugerButton.addEventListener('click', () =>{
    hiddenMenu.classList.toggle('active');
    hambugerButton.classList.toggle('active');
    xButton.classList.toggle('active');
})


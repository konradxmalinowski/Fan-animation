window.document.addEventListener('DOMContentLoaded', () => {
    updateTime();
});

const onBtn = document.getElementsByClassName('on-btn')[0];
const offBtn = document.getElementsByClassName('off-btn')[0];
const btn1 = document.getElementsByClassName('btn-1')[0];
const btn2 = document.getElementsByClassName('btn-2')[0];
const btn3 = document.getElementsByClassName('btn-3')[0];

const wings = document.getElementsByClassName('wings');
const changeMode = document.getElementById('change-mode');
const clock = document.getElementById('clock');

function rotate() {
    wings[0].style.animation = 'rotate1 1s linear 0s normal infinite forwards running';
    wings[1].style.animation = 'rotate2 1s linear 0s normal infinite forwards running';
}

function stop() {
    wings[0].style.animation = 'rotate1 1s linear 0s normal infinite forwards paused';
    wings[1].style.animation = 'rotate2 1s linear 0s normal infinite forwards paused';
}

onBtn.addEventListener('click', (event) => {
    rotate();
});

offBtn.addEventListener('click', (event) => {
    stop();
});

btn1.addEventListener('click', () => {
    wings[0].style.animation = 'rotate1 .75s linear 0s normal infinite forwards running';
    wings[1].style.animation = 'rotate2 .75s linear 0s normal infinite forwards running';
});

btn2.addEventListener('click', () => {
    wings[0].style.animation = 'rotate1 .40s linear 0s normal infinite forwards running';
    wings[1].style.animation = 'rotate2 .40s linear 0s normal infinite forwards running';
});

btn3.addEventListener('click', () => {
    wings[0].style.animation = 'rotate1 .25s linear 0s normal infinite forwards running';
    wings[1].style.animation = 'rotate2 .25s linear 0s normal infinite forwards running';
});

changeMode.addEventListener('click', () => {
    window.document.body.classList.toggle('light');
    clock.children[0].classList.toggle('dark');
});


function updateTime() {
    const date = new Date()
    const hour = date.getHours().toString().padStart(2, 0);
    const minutes = date.getMinutes().toString().padStart(2, 0);
    const seconds = date.getSeconds().toString().padStart(2, 0);

    clock.children[0].textContent = `${hour}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);
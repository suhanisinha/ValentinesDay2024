const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const gif = document.querySelector('.gif');
const message = document.querySelector('.message');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
const phrases = ["Babu, please!", "Sure?", "Think again!", "RUDE!", "WTF??"];

yesBtn.addEventListener('click', () => {
    gif.src = 'onYes.webp';
    question.innerHTML = 'OK yay! I love you too';
    message.innerHTML = "Happy Valentine's Day <3";
    noBtn.style.display = 'none';
    yesBtn.style.display = 'none';
});
noBtn.addEventListener('click', () => {
    window.alert('I WILL KILL YOU');
    window.location.reload();
});
noBtn.addEventListener('mouseover', () => {
    noBtn.innerHTML = phrases[Math.floor(Math.random() * (phrases.length))];
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});
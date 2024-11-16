document.getElementsByTagName("html")[0].style.backgroundImage = `url(/img/background_${getRandomNumber()}.webp)`;

function getRandomNumber() {
    return Math.floor(Math.random() * 20) + 1;
}

changeBackGround();
let randomNUmber1 = Math.floor(Math.random() * 6) + 1;
let randomNUmber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute(`src`, `./images/dice${randomNUmber1}.png`);
document.querySelector(".img2").setAttribute(`src`, `./images/dice${randomNUmber2}.png`);
if (randomNUmber1 === randomNUmber2) {
    document.querySelector(`.container h1`).innerHTML = "<em>Draw!</em>";
}
else {
    if (randomNUmber1 > randomNUmber2) {
        document.querySelector(`.container h1`).innerHTML = "</em>Player1 wins</em>";
    }
    else {
        document.querySelector(`.container h1`).innerHTML = "</em>Player2 wins</em>";
    }
}
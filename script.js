// Event listner --> jispe click karoge wo element par event raise hoga, aur event listener naa milne par event element ke parent par listener dhundega, waha bhi naa milne par evaent parent ke parent ke parent pe listner dhundega


function makeBubble() {
    let clutter = "";

    for (let i = 1; i <= 150; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbottom").innerHTML = clutter;
}

let timer = 60;
let timerint; // Variable to store the interval

function runTimer() {
    timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#Timerval").textContent = timer;
        } else {
            document.querySelector("#pbottom").innerHTML = `<h1>Game Over!</h1>`;
            clearInterval(timerint);
        }
    }, 1000);
}

let hitrn = 0;
function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

let score = 0;
function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbottom").addEventListener("click", function (dets) {
    let clickednum = Number(dets.target.textContent);
    if (clickednum === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
});


document.querySelector("#startGame").addEventListener("click", function () {
    document.querySelector("#instructions").style.display = "none"; 
    runTimer(); 
    makeBubble(); 
    getNewHit();
});

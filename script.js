const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", moveButton);
yesBtn.addEventListener("click", celebrate);

function moveButton() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

function celebrate() {
    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        // random horizontal start
        confetti.style.left = Math.random() * window.innerWidth + "px";

        // random vertical start to spread confetti along height
        confetti.style.top = (Math.random() * window.innerHeight / 2 - 50) + "px";

        // random color
        confetti.style.backgroundColor = randomColor();

        // random size
        const size = Math.random() * 10 + 7; // 7px to 17px
        confetti.style.width = size + "px";
        confetti.style.height = size + "px";

        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 2500);
    }

    setTimeout(() => {
        document.getElementById("loveScreen").classList.add("show");
    }, 800);
}



function randomColor() {
    const colors = ["#ff4d6d", "#ffd166", "#4cc9f0", "#06d6a0", "#c77dff"];
    return colors[Math.floor(Math.random() * colors.length)];
}

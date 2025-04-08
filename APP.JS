let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "pink", "red", "blue"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let startBtn = document.getElementById("startBtn");

// Start game on keypress (for desktop/laptops)
document.addEventListener("keypress", function () {
  if (!started) {
    startGame();
  }
});

// Start game on button click (for mobile)
startBtn.addEventListener("click", function () {
  if (!started) {
    startGame();
  }
});

function startGame() {
  console.log("Game started");
  started = true;
  startBtn.style.display = "none"; // Hide start button after starting
  levelUp();
}

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randbtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  gameFlash(randbtn);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
  startBtn.style.display = "inline-block"; // Show start button again
}

function checkAns() {
  let idx = userSeq.length - 1;

  if (userSeq[idx] === gameSeq[idx]) {
    console.log("Correct so far");

    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was <b>${level}</b><br>Press any key or tap "Start Game"`;
    document.body.style.backgroundColor = "red";
    setTimeout(function () {
      document.body.style.color = "white";
    }, 150);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  let userColor = btn.getAttribute("id");
  console.log(userColor);
  userSeq.push(userColor);
  checkAns();
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

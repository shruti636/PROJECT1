let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "pink", "red", "blue"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;

    levelUp();
  }
});
function gameFlash(btn) {
  btn.classList.add("flash"); //added class
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function userFlash(btn) {
  btn.classList.add("userflash"); //added class
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}
function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;
  //random btn choose

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
}
function checkAns() {
  let idx = userSeq.length - 1;

  if (userSeq[idx] === gameSeq[idx]) {
    console.log("correct so far");

    if (userSeq.length === gameSeq.length) {
      // Player finished the full sequence correctly
      setTimeout(levelUp, 1000);
      userSeq = []; // reset for the next round
    }
  } else {
    h2.innerHTML = `Game Over! Your score was <b>${level}</b><br>Press any key to start.`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  console.log(userColor);
  userSeq.push(userColor);
  checkAns();
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
